[原文地址](https://github.com/PanJiaChen/vue-element-admin)

> 技术栈主要的采用vue+element+axios由webpack2打包

> Validate 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单

> [Mock 测试框架](https://github.com/nuysoft/Mock/wiki) ： 模拟数据请求

> 数据模板定义:'name|rule': value 
name 为属性名, rule 为规则, value 为值，属性名和生成规则之间用|分隔
```常用方法
   Mock.mock( rurl?, rtype?, template|function(options) )
   根据数据模板生成模拟数据。参数的含义和默认值如下所示：
   参数 rurl：可选。表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 /\/domain\/list.json/、'/domian/list.json'。
   参数 rtype：可选。表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
   参数 template：可选。表示数据模板，可以是对象或字符串。例如 { 'data|1-10':[{}] }、'@EMAIL'。
   参数 function(options)：可选。表示用于生成响应数据的函数。
   参数 options：指向本次请求的 Ajax 选项集。
   
   Mock.Random
    是一个工具类，用于生成各种随机数据。Mock.Random 的方法在数据模板中称为“占位符”，引用格式为 @占位符(参数 [, 参数]) 。
```

## vue.2.0新特性 addRoutes实现路由动态加载，菜单动态加载，运用于后台管理系统，路由数据取自数据库。

## vue-countTo [详情见github地址](https://github.com/PanJiaChen/vue-countTo)

## ECharts
 > ECharts 提供了常规的折线图，柱状图，散点图，饼图，K线图，用于统计的盒形图，用于地理数据可视化的地图，热力图，线图，用于关系数据可视化的关系图，treemap，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。

> A Vue.js project

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
