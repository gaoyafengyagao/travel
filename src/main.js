// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  项目的入口文件

//  导入 vue 的包
import Vue from 'vue'

//  导入根组件 App
import App from './App'

//  导入路由的包,后面需要使用到路由就需要导入这个包
import router from './router'
// 导入fastClick 包
import fastClick from 'fastclick'
//  导入reset.css
import './assets/styles/reset.css'
import './assets/styles/border.css'

fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: {App},
  template: '<App/>'
})
