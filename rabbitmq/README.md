## **Rabbitmq**

## 消息队列的优势

## Rabbitmq与其他mq的比较

## [Rabbitmq的使用](Rabbitmq的使用.md)

### Rabbitmq的docker安装

```shell
docker run -d --hostname my-rabbit --name some-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

Rabbit在docker中启用插件

```dockerfile
FROM rabbitmq:management
MAINTAINER xiaoran
RUN rabbitmq-plugins enable --offline rabbitmq_mqtt rabbitmq_federation_management rabbitmq_stomp

```

