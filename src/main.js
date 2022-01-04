import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
Vue.config.productionTip = false;
// 引入全局组件
import TypeNav from '@/components/TypeNav';
import Carsousel from '@/components/Carsousel';
import Pagination from '@/components/Pagination';

// 引入　element　ui
import {Button,MessageBox} from 'element-ui';
Vue.component(Button.name,Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox;

// 注册全局组件：三级联动 TypeNav : 参数一：组件名称，参数二：指定哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);


// 引入 mockServer.js ---- mock数据
import "@/mock/mockServer";
//引入swiper样式
import 'swiper/css/swiper.css'

// 统一引入 api 请求函数 （无vuex的时候，也无需每个组件单独进行引入,将其挂载到 vue的原型对象上）
import * as API from '@/api';
// 引入图片懒加载
import laodImg from '@/assets/loading.gif';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: laodImg
})


// 引入 自定义 插件 myPlugins
import myPlugins from './plugins/myPlugins';
// 注册插件
Vue.use(myPlugins,{
  name:'upper'
})

// 引入 vee-validate 表单验证插件
import "@/plugins/validate";

new Vue({
  // 配置全局时间总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
