import Toast from './toast'
const components = require.context('./', true, /\.js/)
const install = function (Vue) {
  components.keys().forEach(e => {
    let __comp__ = components(e).default
    __comp__ && typeof __comp__ !== 'function' && Vue.component(__comp__.name, __comp__)
  })

  Vue.prototype.$Toast = Toast
}
export default install
