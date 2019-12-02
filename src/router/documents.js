let ctx = require.context('../pages/document', true, /\.vue/)
let routeList = []
ctx.keys().forEach(e => {
  let __comp__ = ctx(e).default
  routeList.push({
    path: __comp__.name.split('-')[1],
    name: __comp__.name,
    component: __comp__
  })
})
const routes = [
  ...routeList
]
export default routes
