export function getComponents () {
  var cxt = require.context('../components', true, /\.vue/)
  var componentsMap = {}
  cxt.keys().forEach(e => {
    cxt(e).default.name && (componentsMap[e] = cxt(e).default)
  })
  return componentsMap
}
