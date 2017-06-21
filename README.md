# orders

> 公司内部加班点餐系统

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 技术栈
  vue-resource
  vue-router
  vue-loading-template
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### vuejs打包遇到的坑

    打包路径配置config/index.js  build下

    ```javascript
    assetsSubDirectory: 'static',

    assetsPublicPath: '/',
    ```

    改为

    ```javascript
    assetsSubDirectory: './static',

    assetsPublicPath: './',
    ```
## DEMO

    [预览](https://jstf9673.github.io/ordering-system/dist/index.html)
