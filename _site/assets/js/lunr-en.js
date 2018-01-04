var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  
  
    
    
      this.add({
          title: "Java ASM 入门实战",
          excerpt: "1.什么是asm asm就是一个可以直接修改或产生字节码的工具，比方说需要统计类中所有方法的耗时时间，一种是在代码中运用切面（例如spring中的aspect），另外一种是直接在字节码中增加相应的方法。 2.asm实战 ####2.1 maven依赖 &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-util --&gt; &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm-util&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-commons...",
          categories: ["tec"],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: "Guava本地缓存托底缓存以及异步更新缓存",
          excerpt: "####1.简介 1.1 guava本地缓存是开发中比较常用的组件，一般使用 LoadingCache，将需要的值加载在内存中，如下所示 LoadingCache&lt;String,T&gt; cacheLoader= CacheBuilder .newBuilder() .expireAfterWrite(5, TimeUnit.MINUTES) .build(new CacheLoader&lt;String, T&gt;() { @Override public T load(String key) throws...",
          categories: ["tec"],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: "linux按行读取文件",
          excerpt: "#!/bin/sh #文件的路径 File=$1 if [ -f $File ]; then cat $File | while read line do echo $line #打印每一行的内容 done...",
          categories: ["tec"],
          tags: [],
          id: 2
      })
      
    
      this.add({
          title: "JackSon反序列化报错,Unrecognized field, not marked as ignorable",
          excerpt: "####1.报错的情景 字段 JavaBean redis 是否报错 包含字段 a,b a 否 包含字段 a a,b 是 ####2.解决办法 2.1对于JaveBean的类定义上加上注解 @JsonIgnoreProperties(ignoreUnknown = true) public Class...",
          categories: ["tec"],
          tags: [],
          id: 3
      })
      
    
      this.add({
          title: "spring 动态切换数据源",
          excerpt: "1.背景 对于数据量在1千万，单个mysql数据库就可以支持，但是如果数据量大于这个数的时候，例如1亿，那么查询的性能就会很低。此时需要对数据库做水平切分，常见的做法是按照用户的账号进行hash，然后选择对应的数据库。 水平切分图，数据落入不同的库中 2.实现 2.1示意图 先来看下大致示意图： 图1是比较常见的情况，单个数据库 图2展示了web应用和数据库之间的一个中间层，这个中间层去选择使用哪个数据库。 2.2数据库配置 首先我们需要配置多个数据源，我是用xml进行配置的其他方法大同小异，就是多建立了几个bean。 &lt;bean id=\"parentDataSource\" abstract=\"true\" class=\"org.apache.tomcat.jdbc.pool.DataSource\" destroy-method=\"close\" p:maxWait=\"10000\" p:removeAbandoned=\"true\" p:removeAbandonedTimeout=\"180\" p:connectionProperties=\"clientEncoding=UTF-8\" p:validationQuery=\"SELECT...",
          categories: ["tec"],
          tags: [],
          id: 4
      })
      
    
      this.add({
          title: "自定义CacheManager",
          excerpt: "####1.背景 spring框架提供了多种cacheManager，例如guavaCacheManager，ehcacheCacheManager，RedisCacheManager等，通过这种方式我们可以很方便的集成这些第三方的cache，并且通过@Cacheable,@CachePut等注解使用。 那么如何把这些第三方缓存联合起来，做一个多级缓存。例如一般是使用本地缓存+redis缓存的方式，如何封装一个中间价，对上层应用使用透明，那么可以较大地提升开发效率。如下图所示 图例 ####2.准备工作 1.spring提供了一个AbstractCacheManager，已实现了大部分管理Cache的方法，我们继承这个类ActivityCacheManager，并且实现它的loadCaches方法。同时自定义了一个cache:ActCache，下图说明了这一关系 ####3.实现自定义cache 先来实现ActCacheManager类: package com.netease.mail.activity.cache.atcache; import com.google.common.cache.CacheBuilder; import com.google.common.cache.LoadingCache; import org.slf4j.Logger; import org.slf4j.LoggerFactory; import org.springframework.beans.factory.annotation.Autowired;...",
          categories: ["tec"],
          tags: [],
          id: 5
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Java ASM 入门实战",
        "url": "http://localhost:4000/tec/2017/01/01/Java-ASM-%E5%85%A5%E9%97%A8%E5%AE%9E%E6%88%98.html",
        "excerpt": "1.什么是asm asm就是一个可以直接修改或产生字节码的工具，比方说需要统计类中所有方法的耗时时间，一种是在代码中运用切面（例如spring中的aspect），另外一种是直接在字节码中增加相应的方法。 2.asm实战 ####2.1 maven依赖 &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-util --&gt; &lt;dependency&gt; &lt;groupId&gt;org.ow2.asm&lt;/groupId&gt; &lt;artifactId&gt;asm-util&lt;/artifactId&gt; &lt;version&gt;6.0&lt;/version&gt; &lt;/dependency&gt; &lt;!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-commons...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Guava本地缓存托底缓存以及异步更新缓存",
        "url": "http://localhost:4000/tec/2017/01/01/guava%E6%89%98%E5%BA%95%E7%BC%93%E5%AD%98%E4%BB%A5%E5%8F%8A%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E7%BC%93%E5%AD%98.html",
        "excerpt": "####1.简介 1.1 guava本地缓存是开发中比较常用的组件，一般使用 LoadingCache，将需要的值加载在内存中，如下所示 LoadingCache&lt;String,T&gt; cacheLoader= CacheBuilder .newBuilder() .expireAfterWrite(5, TimeUnit.MINUTES) .build(new CacheLoader&lt;String, T&gt;() { @Override public T load(String key) throws...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "linux按行读取文件",
        "url": "http://localhost:4000/tec/2017/01/01/linux%E6%8C%89%E8%A1%8C%E8%AF%BB%E5%8F%96%E6%96%87%E4%BB%B6.html",
        "excerpt": "#!/bin/sh #文件的路径 File=$1 if [ -f $File ]; then cat $File | while read line do echo $line #打印每一行的内容 done...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "JackSon反序列化报错,Unrecognized field, not marked as ignorable",
        "url": "http://localhost:4000/tec/2017/01/01/redis%E5%BA%8F%E5%88%97%E5%8C%96%E9%97%AE%E9%A2%98.html",
        "excerpt": "####1.报错的情景 字段 JavaBean redis 是否报错 包含字段 a,b a 否 包含字段 a a,b 是 ####2.解决办法 2.1对于JaveBean的类定义上加上注解 @JsonIgnoreProperties(ignoreUnknown = true) public Class...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "spring 动态切换数据源",
        "url": "http://localhost:4000/tec/2017/01/01/spring%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2%E6%95%B0%E6%8D%AE%E6%BA%90.html",
        "excerpt": "1.背景 对于数据量在1千万，单个mysql数据库就可以支持，但是如果数据量大于这个数的时候，例如1亿，那么查询的性能就会很低。此时需要对数据库做水平切分，常见的做法是按照用户的账号进行hash，然后选择对应的数据库。 水平切分图，数据落入不同的库中 2.实现 2.1示意图 先来看下大致示意图： 图1是比较常见的情况，单个数据库 图2展示了web应用和数据库之间的一个中间层，这个中间层去选择使用哪个数据库。 2.2数据库配置 首先我们需要配置多个数据源，我是用xml进行配置的其他方法大同小异，就是多建立了几个bean。 &lt;bean id=\"parentDataSource\" abstract=\"true\" class=\"org.apache.tomcat.jdbc.pool.DataSource\" destroy-method=\"close\" p:maxWait=\"10000\" p:removeAbandoned=\"true\" p:removeAbandonedTimeout=\"180\" p:connectionProperties=\"clientEncoding=UTF-8\" p:validationQuery=\"SELECT...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "自定义CacheManager",
        "url": "http://localhost:4000/tec/2017/01/01/%E8%87%AA%E5%AE%9A%E4%B9%89cahceManager.html",
        "excerpt": "####1.背景 spring框架提供了多种cacheManager，例如guavaCacheManager，ehcacheCacheManager，RedisCacheManager等，通过这种方式我们可以很方便的集成这些第三方的cache，并且通过@Cacheable,@CachePut等注解使用。 那么如何把这些第三方缓存联合起来，做一个多级缓存。例如一般是使用本地缓存+redis缓存的方式，如何封装一个中间价，对上层应用使用透明，那么可以较大地提升开发效率。如下图所示 图例 ####2.准备工作 1.spring提供了一个AbstractCacheManager，已实现了大部分管理Cache的方法，我们继承这个类ActivityCacheManager，并且实现它的loadCaches方法。同时自定义了一个cache:ActCache，下图说明了这一关系 ####3.实现自定义cache 先来实现ActCacheManager类: package com.netease.mail.activity.cache.atcache; import com.google.common.cache.CacheBuilder; import com.google.common.cache.LoadingCache; import org.slf4j.Logger; import org.slf4j.LoggerFactory; import org.springframework.beans.factory.annotation.Autowired;...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
