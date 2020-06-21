## Rabbitmq的使用



1. 添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```



2. 队列绑定

   

3. 发送消息

   ```java
   @RestController
   public class Controller {
   
       private final String routeKey="routeKey";
       @Autowired
       private RabbitTemplate rabbitTemplate;
   
       @GetMapping("/send")
       public String send(String msg) {
           rabbitTemplate.convertAndSend("change", routeKey,msg );
           return "ok";
       }
   
   }
   ```

4. 接受消息

```java
@Component
@Slf4j
public class MqChangeHander {
    @RabbitListener(queues = "test")
    public void ok(@Payload String msg, Channel channel, @Headers Map<String, Object> headers) {
        log.info("receive mg msg = {}", msg);
    }
}
```





