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
//  导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

//导入 element-ui包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//  导入reset.css
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// 导入轮播图样式
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.config.productionTip = false
// 使用这个插件爱你
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: {App},
  template: '<App/>'
})
