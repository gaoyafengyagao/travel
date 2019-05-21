import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [ //  路由匹配规则
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
