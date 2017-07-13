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

 ![](http://www.iblogtek.com/wordpress/wp-content/uploads/2017/07/257.pic_.jpg)<br>
  
   重要常见配置项：
     ``` 
      .setOption({
          title:{}, //标题
          legend:{}, //图例组件
          grid:{}, //直角坐标系内绘图网格
          xAxis:{}, //直角坐标系 grid 中的 x 轴
          yAxis:{}, //直角坐标系 grid 中的 y 轴
          tooltip:{}, //提示框组件
          series:[{}], //系列列表。每个系列通过 type 决定自己的图表类型
      }}
     ```
   举例：
   ```
     // 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
     legend: {
       icon: 'rect',
       itemWidth: 14,
       itemHeight: 5,
       itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
       data: ['移动', '电信', '联通'],
       right: '4%',
       textStyle: {
         fontSize: 12,
         color: '#F1F1F3'
       }
     },
     grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true //grid 区域是否包含坐标轴的刻度标签。
     },
     tooltip: {
       trigger: 'axis', //触发类型
       axisPointer: { //坐标轴指示器配置项。
         lineStyle: {
           color: '#57617B'
         }
       }
     },
  
   ```
   
## 自定义指令 
  注册一个全局自定义指令:Vue.directive('xxx',{}})
  > 钩子函数，详情参考官方文档：[Vue.js](https://cn.vuejs.org/v2/guide/custom-directive.html)

## 插件的开发和使用
  > 插件就是指对Vue的功能的增强或补充。
  
  > 使用方法:[1、声明插件]-[2、写插件]-[3、注册插件]-[4、使用插件]
  
  1、声明：example.js
  ```
    export default {
      install:function(Vue,options){
        //添加的内容写在这个函数里面 
      }
    }
    // 其中install的第一个参数Vue表示的是Vue的实例(即Vue对象)，第二个参数表示的是一些设置选项。
  ```
  2、注册：main.js中
  ```
     import example from './example.js'
     Vue.use(service)
   ```
  3、写插件使用插件（上面的install函数中）官方有四种写法分别如下：
  ```
   1.添加全局方法或属性
   Vue.myGlobalMethod = function() {...}
   
   2.添加全局资源
   Vue.directive('my-directive',{
     bind(el,binding,vnode,oldVnode){...}
   })
   
   3.注入组件
   Vue.mixin({
     created:function(){...}
   })
   
   4.添加实例方法
   Vue.prototype.$myMethod = function(options) {...}

  ```

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
