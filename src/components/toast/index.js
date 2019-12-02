import Vue from 'vue'
import index from './index.vue'
let ToastConstructor = Vue.extend(index)
/**
 * @param {String | Object} options
 */
const Toast = function (options) {
  let instance = new ToastConstructor({
    data: typeof options === 'string' ? {message: options} : options
  })
  // 提示默认三秒之后消失
  let duration = options.duration || 3000
  // 挂载组件
  instance.vm = instance.$mount()
  document.body.appendChild(instance.$el)
  // 实力初始化完成之后
  Vue.nextTick(() => {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', instance.close)
    instance.timer = setTimeout(() => {
      instance.visible = false
      instance.$el.addEventListener('transitionend', instance.close)
    }, duration)
  })
  // 清除组件
  instance.close = e => {
    e.target.parentNode.removeChild(e.target)
  }
  return instance.vm
}
export default Toast
