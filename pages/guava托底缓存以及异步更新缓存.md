###Guava本地缓存托底缓存以及异步更新缓存

####1.简介
- 1.1 guava本地缓存是开发中比较常用的组件，一般使用 LoadingCache，将需要的值加载在内存中，如下所示  

 ```java
   LoadingCache<String,T> cacheLoader= CacheBuilder
                .newBuilder()
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .build(new CacheLoader<String, T>() {
                    @Override
                    public T load(String key) throws Exception {
                       
                        return method(key);//1.执行method,获取key对应的值
                    }
                }); 
 ```
  
 使用的方法: 
 
 ``` 
  T value=cacheLoader.get(key);//获取key对应的值
 ```
 
#### 2.托底缓存设置
- 如果mehod()执行出错的话，无法拿到新的缓存。有时候，我们希望如果method执行异常的时候，本地缓存依旧用过期的缓存，那么可以重写CacheLoader中的reload方法进行设置

```java 
public abstract class RefreshKeepCacheLoader<K, V> extends CacheLoader<K, V> {
    public ListenableFuture<V> reload(K key, V oldValue) throws Exception {
        Object newvalue = null;
        try {
            newvalue = this.load(key);
        } catch (Exception e) {
        
        }

        if(newvalue == null) {
            newvalue = oldValue;
        }
        return Futures.immediateFuture(newvalue);
    }
}

```
那么此时我们的cacheLoader可以这么写：

 ```java
   LoadingCache<String,T> cacheLoader= CacheBuilder
                .newBuilder()
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .build(new RefreshKeepCacheLoader<String, T>() {
                    @Override
                    public T load(String key) throws Exception {
                       
                        return method(key);//2.执行method,获取key对应的值
                    }
                }); 
 ```
 与上面不同的是，用自定义的RefreshKeepCacheLoader替换了CacheLoader类，由于缓存过期会执行reload方法，如果reload异常，就采用oldValue。
  
#### 3.异步缓存设置
- 3.1在并发条件下，有N个线程，如果缓存失效了，会有一个线程A去执行load方法（参见官方说明文档*If another call to get(K) or getUnchecked(K) is currently loading the value for key, simply waits for that thread to finish and returns its loaded value.*）,而其他线程就会等待线程A得到的结果，这样就会影响性能。
- 3.2 我们可以使全部线程返回旧的缓存值，把去异步更新缓存。方法如下： 
首先我们看下，默认的reload的方法是怎么写的: 

```java
 public ListenableFuture<V> reload(K key, V oldValue) throws Exception {
    checkNotNull(key);
    checkNotNull(oldValue);
    return Futures.immediateFuture(load(key));
  }
```
其实通过方法名，就可以看出执行load方法，然后用Futures.immediateFuture封装成ListenableFuture，再来看下immediateFuture方法  

```java
 /**
   * Creates a {@code ListenableFuture} which has its value set immediately upon construction. The
   * getters just return the value. This {@code Future} can't be canceled or timed out and its
   * {@code isDone()} method always returns {@code true}.
   */
  public static <V> ListenableFuture<V> immediateFuture(@Nullable V value) {
    if (value == null) {
      // This cast is safe because null is assignable to V for all V (i.e. it is covariant)
      @SuppressWarnings({"unchecked", "rawtypes"})
      ListenableFuture<V> typedNull = (ListenableFuture) ImmediateSuccessfulFuture.NULL;
      return typedNull;
    }
    return new ImmediateSuccessfulFuture<V>(value);
  }

```
这就比较清楚了，这个future中直接设置的是值。
那么我们现在就要重写这个reload方法。

```java

public abstract  class RefreshAsyncCacheLoader<K, V> extends CacheLoader<K, V> {

    @Override
    public ListenableFuture<V> reload(final K key, final V oldValue) throws Exception {
        ListenableFutureTask<V> task = ListenableFutureTask.create(new Callable<V>() {
            public V call() {
                try {
                    return load((K) key);
                } catch (Exception e) {
                }
                return oldValue;
            }
        });
        ThreadPoolUtil.getInstance().execute(task);//这里将这个task放到自定义的线程池中去执行，返回一个futrue，可以通过future获取线程执行获取的值
        return task;
    }

}

```

#### 4.总结
- 最终我们可以得到具有托底缓存设置，并且可以异步更新缓存的guavaCache

```java
   LoadingCache<String,T> cacheLoader= CacheBuilder
                .newBuilder()
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .build(new RefreshAsyncCacheLoader <String, T>() {
                    @Override
                    public T load(String key) throws Exception {
                       
                        return method(key);//1.执行method,获取key对应的值
                    }
                }); 

```

#### 5.实验
下面我们做一个简单的实验，涉及到WebController，CacheTest这两个类。  

```java
package com.netease.mail.activity.web.controller;

import com.netease.mail.activity.constant.RetCode;
import com.netease.mail.activity.meta.RequestHolder;
import com.netease.mail.activity.meta.vo.common.AjaxResult;
import com.netease.mail.activity.service.CacheTest;
import com.netease.mail.rambo.log.StatLogger;
import com.netease.mail.rambo.log.StatLoggerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * 重构web-control
 * Created by hzlaojiaqi on 2016/9/19.
 */
@Controller
public class WebController {

    private static final Logger INTERACTIVE_LOG = LoggerFactory.getLogger("INTERACTIVE_LOGGER");

    public static final StatLogger USER_TRACE_LOG = StatLoggerFactory.getLogger("emptyProject");

    @Autowired
    RequestHolder mRequestHolder;


    @Autowired
    CacheTest cacheTest;

    /**
     * 获取当前uid的信息
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/ajax/getActInfo.do",method = RequestMethod.GET)
    @ResponseBody
    public AjaxResult getActInfo2(HttpServletRequest httpServletRequest){
        String uid = mRequestHolder.getUid();
        return new AjaxResult(RetCode.SUCCESS,cacheTest.cacheGet(uid));
    }
}

```
- 在看下CacheTest这个service    

```java

package com.netease.mail.activity.service;

import com.netease.mail.activity.cache.RedisConfigure;
import com.netease.mail.activity.web.controller.BaseAjaxController;
import com.netease.mail.util.common.TimeUtil;
import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
 * Created by hzlaojiaqi on 2017/11/9.
 */
@Service
public class CacheTest extends BaseService{

    @Cacheable(cacheManager = "activityCacheManager",key = "'actCache_'+#uid",cacheNames = "actCache",unless = "#result==null")
    public String cacheGet(String uid){
        String s = uid + "_" + TimeUtil.now();
        THIRDPARTY_LOG.info("cacheGet in method uid:{} s:{}",uid,s);
        return s;
    }
}
```
- 这里设置缓存的时间比较短，只有10s钟，具体的设置如下：  

```java 
    LoadingCache<String,Object> cache = CacheBuilder
            .newBuilder()
            .maximumSize(5210)
            .refreshAfterWrite(10, TimeUnit.SECONDS)
            .build(new RefreshAsyncCacheLoader<String, Object>() {
                @Override
                public Object load(String key) throws Exception {
                    Object o = mRedis.opsForValue().get(key);
                    THIRDPARTY_LOG.debug("thread:{},activityManager local cache reload key:{},result:{}",Thread.currentThread().getName(),key,o);
                    return o;
                }
            });
```
- 最终可以看到的log为
![](https://ws3.sinaimg.cn/large/006tKfTcgy1fm543g9bq1j30yi08442r.jpg)
- 请求线程为http-apr-8080-exec-8，该线程马上返回了原来的值，而我们自定义的线程custom\_thread\_member_11则执行了reload方法。（这里加载后的值和之前的值是一样的，特此说明）
- 如果是第一次请求，由于没有旧的值，那么http-apr-8080-exec-8会去执行reload方法。

Ps：文章难免有纰漏，望拍砖指正，感谢。

##### 5.参考资料
- guvaCache官方文档[https://github.com/google/guava/wiki/CachesExplained]()
- 并发编程网 [http://ifeve.com/google-guava-cachesexplained/]()
