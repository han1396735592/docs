(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{402:function(s,n,e){"use strict";e.r(n);var a=e(44),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"nginx的常见配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx的常见配置"}},[s._v("#")]),s._v(" nginx的常见配置")]),s._v(" "),e("h2",{attrs:{id:"配置https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置https"}},[s._v("#")]),s._v(" 配置https")]),s._v(" "),e("p",[s._v("配置以下内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server\n{\n    listen 443 ssl;\n    server_name meal.api.qqhxj.cn;\n    error_page 404 /404.html;\n    ssl_certificate      ssl/meal.api.qqhxj.cn/meal.api.qqhxj.cn.pem;\n    ssl_certificate_key  ssl/meal.api.qqhxj.cn/meal.api.qqhxj.cn.key;\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n    }\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("把对应的证书文件放在 "),e("code",[s._v("ssl/meal.api.qqhxj.cn")])])]),s._v(" "),e("h2",{attrs:{id:"配置反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置反向代理"}},[s._v("#")]),s._v(" 配置反向代理")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server\n{\n    listen 80;\n    server_name baidu.com;\n    error_page 404 /404.html;\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n    }\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"解决跨域问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域问题"}},[s._v("#")]),s._v(" 解决跨域问题")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server\n {\n     listen 80;\n     server_name www.host.com;\n     proxy_set_header Host $host;                \n     error_page 404 /404.html;\n     location / {\n         proxy_pass http://127.0.0.1:9090;\n         proxy_connect_timeout 4s;                #配置点1\n         proxy_read_timeout 60s;                  #配置点2，如果没效，可以考虑这个时间配置长一点\n         proxy_send_timeout 12s;                  #配置点3\n         proxy_set_header Upgrade $http_upgrade;\n         proxy_set_header Connection \"Upgrade\";\n         add_header 'Access-Control-Allow-Origin' '*';\n         add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\n         add_header Access-Control-Allow-Headers 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';\n         add_header 'Access-Control-Allow-Credentials' 'true';\n          if ($request_method = 'OPTIONS') {\n                         add_header 'Access-Control-Allow-Origin' *;\n                         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';\n                         add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';\n                         add_header 'Access-Control-Max-Age' 1728000;\n                         add_header 'Content-Length' 0; return 200;\n          }\n     }\n\n }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("h2",{attrs:{id:"配置负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置负载均衡"}},[s._v("#")]),s._v(" 配置负载均衡")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//举例，以下IP，端口无效\nupstream testhost{ \n\tserver 127.0.0.1:8080 weight=1; \n\tserver 127.0.0.1:8081 down; \t\t//down 表示单前的server临时不參与负载.\n\tserver 127.0.0.1:8082 backup;\t\t//backup： 其他全部的非backup机器down或者忙的时候，\n\t\t\t\t\t\t\t\t\t//请求backup机器。所以这台机器压力会最轻  \n\tserver 127.0.0.1:8083 weight=2; \t//weight 默觉得1.weight越大，负载的权重就越大\n}\nserver\n{\n\n    listen 80;\n    server_name host;\n    error_page 404 /404.html;\n    location / {\n        proxy_pass http://testhost;\n    }\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);