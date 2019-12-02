import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages'
import document from '../pages/document'
import routes from './documents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/document',
      component: document,
      children: [...routes]
    }
  ]
})
