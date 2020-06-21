# 监听key失效



1. ### 修改 `redis`配置

   这个key过期发布的通道，redis有提供一个专门打开的开关，在redis.conf里进行配置：

   默认是不打开

   ```
   notify-keyspace-events "Ex"
   ```

2. 配置`RedisMessageListenerContainer`

```java
@Bean
RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory) {
    RedisMessageListenerContainer container = new RedisMessageListenerContainer();
    container.setConnectionFactory(connectionFactory);
    return container;
}
```

2. 配置监听器

```java
@Slf4j
@Component
public class RedisKeyListener extends KeyExpirationEventMessageListener {
    public RedisKeyListener(RedisMessageListenerContainer listenerContainer) {
        super(listenerContainer);
    }

    @Override
    public void onMessage(Message message, byte[] pattern) {
        super.onMessage(message, pattern);
        log.info("getChannel = {}", new String(message.getChannel()));
        log.info("body = {}", new String(message.getBody()));
        log.info("pattern = {}", new String(pattern));
    }
}
```

