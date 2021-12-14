import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
Vue.config.productionTip = false;
// 引入全局组件
import TypeNav from '@/components/TypeNav';
import Carsousel from '@/components/Carsousel'
// 注册全局组件：三级联动 TypeNav : 参数一：组件名称，参数二：指定哪个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsousel.name,Carsousel);

// 引入 mockServer.js ---- mock数据
import "@/mock/mockServer";
//引入swiper样式
import 'swiper/css/swiper.css'
new Vue({
  // 配置全局时间总线
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
