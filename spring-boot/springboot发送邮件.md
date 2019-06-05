# spring boot 发送邮件

## 1.创建`spring boot`项目
## 2.引入邮件依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```
## 3.配置邮件账号密码等信息
```yaml
spring:
  mail:
    host: smtp.qq.com
    username: 123456@qq.com
    password: abcdefg
# 按照自己信息进行的配置
```

## 4. 依赖注入 `JavaMailSender`
```java
 public class DemoApplication {
 
     @Autowired
     private JavaMailSender javaMailSender;
 
}
```
## 5.发送邮件
```java
@RestController
@SpringBootApplication
public class DemoApplication {
    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping("/test")
    public void contextLoads() {

        MimeMessage message = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom("123456@qq.com");
            helper.setSubject("atet");
            helper.setTo("123456@163.com");
            helper.setText("<html><p align='center'><p></html>");
            javaMailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("ok");
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
```

