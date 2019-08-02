# springboot 使用Quartz实现动态配置定时任务

## 1. 引入依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```
## 2. 编写job
```java
public class TestJob implements Job {
    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        System.out.println("hello time ="+System.currentTimeMillis());
    }
}
```

## 3. 使用

### 配置
```yml
spring:
  quartz:
    job-store-type: memory
    auto-startup: false
    jdbc:
      initialize-schema: always
    startup-delay: 10
```

### 开启调度

```java
@RestController
@RequestMapping("/job")
public class TestController {
    @Autowired
    private Scheduler scheduler;

    @GetMapping("start")
    public String start(@RequestParam String cron, @RequestParam String jobClass,
                        @RequestParam String jobName, @RequestParam String jobGroup) {
    
        TriggerKey triggerKey = TriggerKey.triggerKey(jobName, jobGroup);
        JobKey jobKey = JobKey.jobKey(jobName, jobGroup);
        CronScheduleBuilder scheduleBuilder = CronScheduleBuilder.cronSchedule(cron).withMisfireHandlingInstructionDoNothing();
        CronTrigger trigger = TriggerBuilder.newTrigger().withIdentity(triggerKey).withSchedule(scheduleBuilder).build();
        Class<? extends Job> clazz = null;
        try {
            clazz = (Class<? extends Job>) Class.forName(jobClass);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        JobDetail jobDetail = JobBuilder.newJob(clazz).withIdentity(jobKey).build();
        try {
            scheduler.scheduleJob(jobDetail, trigger);
            return "ok";
        } catch (SchedulerException e) {
            e.printStackTrace();
        }
        return "err";
    }                                   
}
```

### 关闭
```java
@RestController
@RequestMapping("/job")
public class TestController {
    @Autowired
    private Scheduler scheduler;
    
    @GetMapping("/stop")
    public String stop(@RequestParam String jobName, @RequestParam String jobGroup){
        try {
            scheduler.unscheduleJob(new TriggerKey(jobName,jobGroup));
            return "ok";
        } catch (SchedulerException e) {
            e.printStackTrace();
        }
        return "err";
    }
}
```
