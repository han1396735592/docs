# nginx配置反向代理


## 新建配置文件

在 `/etc/nginx/conf.d` 新建文件 `*.conf` 如 `baidu.com.conf`

在文件内配置

```
server
{
    listen 80;
    server_name baidu.com;
    error_page 404 /404.html;
    location / {
        proxy_pass http://127.0.0.1:8080;
    }

}
```

## 测试配置是否正确
```
nginx -t
```


## nginx重载配置

```shell
nginx -s reload
```