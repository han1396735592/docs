# nacos


## windows平台集群部署

1. 导入`mysql`数据
2. 配置`mysql`连接
```properties
db.num=1
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=root
db.password=123456
```
3. 集配配置 `cluster.conf`

- 这个地方会遇到问 `ip`地址一定要写对

```
10.0.75.1:8848
10.0.75.1:8849
10.0.75.1:8850

```

4. 启动  `startup.cmd -m cluster` 
- 集群模式一定要加参数 `-m cluster` 默认是单机形式启动的

5. 成功
