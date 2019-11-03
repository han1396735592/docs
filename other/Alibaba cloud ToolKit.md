# 阿里巴巴 cloud toolkit

## springboot 部署脚本


```shell
#!/usr/bin/env bash
source /etc/profile;
libName='library-0.0.1-SNAPSHOT.jar'
appName='app.jar'

kill `cat pid`
rm pid;
rm nohup.log;

mv $libName $appName;
nohup /usr/bin/java -jar  $appName --server.port=8064 > nohup.log 2>&1 &
echo $! > pid
echo success

```
