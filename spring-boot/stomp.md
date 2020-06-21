## Springboot 使用 stomp



1. 引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-messaging</artifactId>
</dependency>
```

2. 启动配置

`@EnableWebSocketMessageBroker`

3. Stomp配置

   ```java
   
   @Configuration
   public class StompConfig implements WebSocketMessageBrokerConfigurer {
   
       @Autowired
       private StompHandShakeInterceptor handShakeInterceptor;
   
       @Override
       public void registerStompEndpoints(StompEndpointRegistry registry) {
           registry.addEndpoint("/stomp")
                   // 添加允许跨域访问
                   .setAllowedOrigins("*")
                   //添加socket拦截器，用于从请求中获取客户端标识参数
                   .addInterceptors(handShakeInterceptor)
                   .withSockJS();
       }
   
       @Override
       public void configureMessageBroker(MessageBrokerRegistry config) {
           config.enableSimpleBroker("/topic");
           config.setUserDestinationPrefix("/user");
           config.setApplicationDestinationPrefixes("/app");
       }
   
   }
   ```

   

4. 消息监听与发送

   ```java
   @Slf4j
   @RestController
   public class StompMessgaeHanlder {
       @Autowired
       private SimpMessagingTemplate messagingTemplate;
       @MessageMapping("/message")
       @SendTo("/topic/sub")
       public String hanlder(@Payload String data) {
           log.info("data = {}", data);
           return "hello"+data;
       }
   
       @Scheduled(fixedDelay = 1000)
       public void hanlder() {
           messagingTemplate.send("/topic/sub", new GenericMessage("hello".getBytes()) {
           });
       }
   }
   
   ```

   

