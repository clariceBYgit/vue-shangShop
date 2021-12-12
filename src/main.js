import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
Vue.config.productionTip = false
// 引入全局组件
import TypeNav from '@/components/TypeNav'
// 注册全局组件：三级联动 TypeNav : 参数一：组件名称，参数二：指定哪个组件
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
