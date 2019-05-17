> #### spring boot 的常见问题

### 1. https 配置

配置为使用自定义端口时，还可以使用各种`management.server.ssl.*`属性为管理服务器配置自己的SSL 。例如，这样做可以让主应用程序使用HTTPS时管理服务器通过HTTP可用，如以下属性设置所示：

```properties
server.port = 8443
server.ssl.enabled = true
server.ssl.key-store = classpath：store.jks
server.ssl.key-password = secret
```

```java
@Bean
public Connector connector(){
        Connector connector=new Connector("org.apache.coyote.http11.Http11NioProtocol");
        connector.setScheme("http");
        connector.setPort(8080);
        connector.setSecure(false);
        connector.setRedirectPort(8443);
        return connector;
}
@Bean
public TomcatServletWebServerFactory tomcatServletWebServerFactory(Connector connector){
       TomcatServletWebServerFactory tomcat=new TomcatServletWebServerFactory(){
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint securityConstraint=new SecurityConstraint();
                securityConstraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection collection=new SecurityCollection();
                collection.addPattern("/*");
                securityConstraint.addCollection(collection);
                context.addConstraint(securityConstraint);
            }
        };
        tomcat.addAdditionalTomcatConnectors(connector);
        return tomcat;
}
```



#### 2. redis的使用

在 `pom.xml`  添加对`redis`的依赖。

```xml
<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-redis -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

 在 `application.yml` 配置 `redis`

```yml
spring:
  redis:  
    database: 0
    host: localhost
    port: 6379
    password: password 
```

#### 3 在`spring boot` 使用 `http session` 

在`pom.xml` 添加依赖

```xml
<dependency>
	<groupId>org.springframework.session</groupId>
	<artifactId>spring-session-data-redis</artifactId>
</dependency>
```

```properties
spring.session.store-type=redis # Session store type.
server.servlet.session.timeout= # Session timeout. If a duration suffix is not specified, seconds will be used.
spring.session.redis.flush-mode=on-save # Sessions flush mode.
spring.session.redis.namespace=spring:session # Namespace for keys used to store session
spring.redis.host=localhost # Redis server host.
spring.redis.password= # Login password of the redis server.
spring.redis.port=6379 # Redis server port.
```

别忘记使用 `@EnableRedisHttpSession`

4. `spring boot` 使用 `mybatis-plus` 

   在 `pom.xml` 添加

```xml
<dependency>
     <groupId>com.baomidou</groupId>
     <artifactId>mybatis-plus-boot-starter</artifactId>
     <version>3.0.1</version>
</dependency>
<!--mysql 依赖-->
```

