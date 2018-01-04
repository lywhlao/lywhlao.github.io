---
自定义cacheManager
---
####1.背景
- spring框架提供了多种cacheManager，例如guavaCacheManager，ehcacheCacheManager，RedisCacheManager等，通过这种方式我们可以很方便的集成这些第三方的cache，并且通过@Cacheable,@CachePut等注解使用。
- 那么如何把这些第三方缓存联合起来，做一个多级缓存。例如一般是使用本地缓存+redis缓存的方式，如何封装一个中间价，对上层应用使用透明，那么可以较大地提升开发效率。如下图所示
- 图例![](https://ws4.sinaimg.cn/large/006tKfTcgy1fm3dtd4xrlj30pi0lm3zo.jpg)
####2.准备工作
- 1.spring提供了一个AbstractCacheManager，已实现了大部分管理Cache的方法，我们继承这个类ActivityCacheManager，并且实现它的loadCaches方法。同时自定义了一个cache:ActCache，下图说明了这一关系
![](https://ws3.sinaimg.cn/large/006tKfTcgy1fm3ee6xfl7j30gs0fg3z7.jpg)


####3.实现自定义cache
- 先来实现ActCacheManager类: 

```java
package com.netease.mail.activity.cache.atcache;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.LoadingCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.support.AbstractCacheManager;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.Collections;

/**
 */
@Service("activityCacheManager")
public class ActivityCacheManager extends AbstractCacheManager {

    private static final Logger LOGGER = LoggerFactory.getLogger(ActivityCacheManager.class);

    protected static final Logger THIRDPARTY_LOG = LoggerFactory.getLogger("THIRDPARTY_LOGGER");

    LoadingCache<String,Object> cache = CacheBuilder
            .newBuilder()
            .maximumSize(5210)
            .refreshAfterWrite(10, TimeUnit.SECONDS)
            .build(new RefreshAsyncCacheLoader<String, Object>() {
                @Override
                public Object load(String key) throws Exception {
                    Object o = mRedis.opsForValue().get(key);
                    THIRDPARTY_LOG.debug("activityManager local cache reload key:{},result:{}",key,o);
                    return o;
                }
            });

    @Autowired
    RedisTemplate<String, Object> mRedis;


    @Override
    protected Collection<? extends Cache> loadCaches() {
        Set<ActCache> actCacheSet=new HashSet<ActCache>();
        actCacheSet.add(new ActCache("actCache",this));
        return actCacheSet;
    }

    public Object get(String key){
        if(StringUtils.isEmpty(key)){
            return null;
        }
        Object result=null;
        try {
            result= cache.get(key);
            THIRDPARTY_LOG.debug("activityManager local cache get key:{},result:{}",key,result);
        } catch (Exception e) {
            LOGGER.debug("ActivityCacheManager get null value exception",e);
        }
        return result;
    }


    public void put(Object key, Object value) {
        if(StringUtils.isEmpty(key)){
            return;
        }
        mRedis.opsForValue().set(String.valueOf(key),value);
        THIRDPARTY_LOG.debug("activityManager put redist cache key:{},value:{}",key,value);
    }

    public void evict(Object key) {
        mRedis.delete(String.valueOf(key));
    }

    public Object putIfAbsent(Object key, Object value) {
        Boolean setStatus = mRedis.opsForValue().setIfAbsent(String.valueOf(key), value);
        if(setStatus){
            return value;
        }
        return null;
    }

    public void clear() {

    }

}
```


