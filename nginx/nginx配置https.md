
# nginx配置https

```
server
{
    listen 443 ssl;
    server_name meal.api.qqhxj.cn;
    error_page 404 /404.html;
    ssl_certificate      ssl/meal.api.qqhxj.cn/meal.api.qqhxj.cn.pem;
    ssl_certificate_key  ssl/meal.api.qqhxj.cn/meal.api.qqhxj.cn.key;
    location / {
        proxy_pass http://127.0.0.1:8080;
    }

}
```