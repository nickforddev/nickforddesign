import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => {
        require(['@/views/Home'], resolve)
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: resolve => {
        require(['@/views/demo'], resolve)
      }
    },
    {
      path: '/minesweeper',
      name: 'minesweeper',
      component: resolve => {
        require(['@/views/minesweeper'], resolve)
      }
    },
    {
      path: '*',
      name: '404',
      component: resolve => {
        require(['@/views/404'], resolve)
      }
    }
  ]
})
