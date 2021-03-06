﻿# spring-boot 定时任务

## 1. 开启`@EnableScheduling`注解

## 2. 编写执行方法
```jvav
@Scheduled(initialDelay = 10,fixedRate=5)
public void test() {
    System.out.println(System.currentTimeMillis());
}
```
## 3. cron表达式
|顺序|秒|分钟|小时|日期|月份|星期|年(可选)|
|---|---|---|---|---|---|---|---|
|取值|0-59|0-59|0-23|0-30(31)|1-12|1-7|*|
|允许特殊字符|, - * /|, - * /|, - * /|, - * / ? L W C|, - * /|, - * / L # C|1970-2099 , - * /

### 字段含义

```
*：代表所有可能的值
-：指定范围
,：列出枚举??例如在分钟里，"5,15"表示5分钟和20分钟触发
/：指定增量??例如在分钟里，"3/15"表示从3分钟开始，没隔15分钟执行一次
?：表示没有具体的值，使用?要注意冲突
L：表示last，例如星期中表示7或SAT，月份中表示最后一天31或30，6L表示这个月倒数第6天，FRIL表示这个月的最后一个星期五
W：只能用在月份中，表示最接近指定天的工作日
#：只能用在星期中，表示这个月的第几个周几，例如6#3表示这个月的第3个周五
```

### 示例 

``` 
0 * * * * ? 每1分钟触发一次
0 0 * * * ? 每天每1小时触发一次
0 0 10 * * ? 每天10点触发一次
0 * 14 * * ? 在每天下午2点到下午2:59期间的每1分钟触发
0 30 9 1 * ? 每月1号上午9点半
0 15 10 15 * ? 每月15日上午10:15触发
*/5 * * * * ? 每隔5秒执行一次
0 */1 * * * ? 每隔1分钟执行一次
0 0 5-15 * * ? 每天5-15点整点触发
0 0/3 * * * ? 每三分钟触发一次
0 0 0 1 * ?? 每月1号凌晨执行一次
```
