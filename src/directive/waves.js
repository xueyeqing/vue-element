/**
 * Created by zyzhang on 17/7/13.
 */
import './waves.css'

const vueWaves = {};
vueWaves.install = (Vue, options = {}) => {
  Vue.directive('waves', {
    // 只调用一次，指令第一次绑定到元素时调用 binding一个对象，包含很多属性
    bind(el, binding) {
      // 指定事件名 ， 事件触发时执行的函数
      el.addEventListener('click', e => {
        // 拷贝属性值 花括号叫目标对象 后面源对象
        // value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
        const customOpts = Object.assign(options, binding.value);
        const opts = Object.assign({
          ele: el, // 波纹作用元素
          type: 'hit', // hit点击位置扩散,center中心点扩展
          color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
        }, customOpts);
        const target = opts.ele;
        if (target) {
          target.style.position = 'relative';
          target.style.overflow = 'hidden';
          const rect = target.getBoundingClientRect();
          let ripple = target.querySelector('.waves-ripple');
          // 如果ripple 为空
          if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'waves-ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
            target.appendChild(ripple);
          } else {
            ripple.className = 'waves-ripple';
          }
          console.log(ripple);
          switch (opts.type) {
            case 'center':
              ripple.style.top = (rect.height / 2 - ripple.offsetHeight / 2) + 'px';
              ripple.style.left = (rect.width / 2 - ripple.offsetWidth / 2) + 'px';
              break;
            default:
              ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop) + 'px';
              ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft) + 'px';
          }
          ripple.style.backgroundColor = opts.color;
          ripple.className = 'waves-ripple z-active';
          return false;
        }
      }, false);
    }
  })
};

export default vueWaves;
