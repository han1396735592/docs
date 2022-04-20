# nginx的常见配置

## 配置https

配置以下内容
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
2. 把对应的证书文件放在 `ssl/meal.api.qqhxj.cn`

## 配置反向代理

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

## 解决跨域问题

```
server
 {
     listen 80;
     server_name www.host.com;
     proxy_set_header Host $host;                
     error_page 404 /404.html;
     location / {
         proxy_pass http://127.0.0.1:9090;
         proxy_connect_timeout 4s;                #配置点1
         proxy_read_timeout 60s;                  #配置点2，如果没效，可以考虑这个时间配置长一点
         proxy_send_timeout 12s;                  #配置点3
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "Upgrade";
         add_header 'Access-Control-Allow-Origin' '*';
         add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
         add_header Access-Control-Allow-Headers 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
         add_header 'Access-Control-Allow-Credentials' 'true';
          if ($request_method = 'OPTIONS') {
                         add_header 'Access-Control-Allow-Origin' *;
                         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                         add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
                         add_header 'Access-Control-Max-Age' 1728000;
                         add_header 'Content-Length' 0; return 200;
          }
     }

 }
```

## 配置负载均衡


```
//举例，以下IP，端口无效
upstream testhost{ 
	server 127.0.0.1:8080 weight=1; 
	server 127.0.0.1:8081 down; 		//down 表示单前的server临时不參与负载.
	server 127.0.0.1:8082 backup;		//backup： 其他全部的非backup机器down或者忙的时候，
									//请求backup机器。所以这台机器压力会最轻  
	server 127.0.0.1:8083 weight=2; 	//weight 默觉得1.weight越大，负载的权重就越大
}
server
{

    listen 80;
    server_name host;
    error_page 404 /404.html;
    location / {
        proxy_pass http://testhost;
    }

}
```