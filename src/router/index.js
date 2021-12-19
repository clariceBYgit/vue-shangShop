import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';

// 重写$router.push|replace 为解决路由跳转是传相同的参数，出现 NavigationDuplicated 的错误
// 参数1：location--往哪跳转， resolve--成功的回调， reject--失败的回调
// 1.重写push:先保存一份原有的push|replace方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;    
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
};
// ****call 与 apply 的区别****
/*
    相同点:都可以调用函数一次，都可以篡改函数的上下文一次
    不同点：传递的参数，call传递参数用逗号隔开；apply方法执行，传递数组
*/

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject ){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    // 配置路由
    routes,
    // 滚动行为设置，使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})