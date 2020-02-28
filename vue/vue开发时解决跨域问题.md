# vue  开发是解决跨域问题

- 针对于vue-cli 3.0

## 方法

1. ### 添加插件 `@cnamts/vue-cli-plugin-proxy`

```shell
yarn add @cnamts/vue-cli-plugin-proxy
```

2. ### 添加配置 在根目录添加文件 `vue.config.js`
```js
module.exports = {
    pluginOptions: {
        proxy: {
            enabled: true,
            context: '/api',
            options: {
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws:true,                                            //websocket
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
```


