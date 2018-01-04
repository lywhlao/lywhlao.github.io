### Java ASM 入门实战
#### 1.什么是asm
asm就是一个可以直接修改或产生字节码的工具，比方说需要统计类中所有方法的耗时时间，一种是在代码中运用切面（例如spring中的aspect），另外一种是直接在字节码中增加相应的方法。
### 2.asm实战
####2.1 maven依赖
``` java
     <dependency>
            <groupId>org.ow2.asm</groupId>
            <artifactId>asm</artifactId>
            <version>6.0</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-util -->
        <dependency>
            <groupId>org.ow2.asm</groupId>
            <artifactId>asm-util</artifactId>
            <version>6.0</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.ow2.asm/asm-commons -->
        <dependency>
            <groupId>org.ow2.asm</groupId>
            <artifactId>asm-commons</artifactId>
            <version>6.0</version>
        </dependency>


```

###