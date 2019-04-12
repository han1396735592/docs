## spring boot 使用web socket

1. 导入依赖

```xml
<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

2. 添加配置

```java
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(myHandler(), "/test");
    }

    @Bean
    public WebSocketHandler myHandler() {
        return new TestSockerHandler();
    }

}
```

3. 处理socket

```java
public class TestSockerHandler extends TextWebSocketHandler {
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

    }
}
```
