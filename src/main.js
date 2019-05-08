import Vue from 'vue'
import App from './App.vue'
// 引入自己的路由
import Routes from './routes'
// 路由
import VueRouter from 'vue-router'
// http请求
// import VueResource from 'vue-resource'
// axios
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)
// 中间件
Vue.prototype.$http = axios
// 实例化路由
const router = new VueRouter({
  // 去掉#号
  mode: "history",
  // 当前路径
  base: __dirname,
  routes:Routes
})
// 挂载路由
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

