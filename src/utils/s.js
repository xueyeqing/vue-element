/**
 * Created by a1 on 17/7/12.
 */

const service = {};

service.install = (Vue, options) => {
  /* 添加实例方法 返回数字是输入数字的两倍，如果不是数字或者不能隐式转换为数字，则输出null */
  console.log(options);
  Vue.prototype.doubleNumber = function (val) {
    if (typeof val === 'number') {
      return val * 2;
    } else if (!isNaN(Number(val))) {
      return Number(val) * 2;
    } else {
      return null
    }
  };

  /* 添加全局资源 时间格式化过滤器 */
  Vue.filter('formatTime', value => {
    // isNaN() 函数用于检查其参数是否是非数字值。
    if (!isNaN(Number(value))) {
      value = Number(value);
    } else {
      return;
    }
    Date.prototype.Format = function (fmt) {
      let o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3) // 季度
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
      }
      return fmt;
    }
    return new Date(value).Format('yyyy-MM-dd hh:mm:ss')
  });

  // 添加全局资源
  // 添加注入组件时，是否利用console.log来通知的判断条件，也是组件实例属性
  Vue.prototype.NOTICE = true;
  /* 注入组件 */
  Vue.mixin({
    // created: function () {
    //   if (this.NOTICE) {
    //     console.log('组件开始加载');
    //   }
    // },
    methods: {
      test: () => {
        console.log('mixin test');
      }
    }
  });
}

export default service;
