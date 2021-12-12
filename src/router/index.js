import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import Search from '@/pages/Search'

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
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                isShow:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isShow:false
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isShow:false
            }
        },
        {
            // 代表 params参数可传不可传
            path:'/search/:keyword?',
            name:'search',
            component:Search,
            meta:{
                isShow:true
            }
        },
        {
            path:'/',
            redirect:'/home',
           
        }
    ]
})