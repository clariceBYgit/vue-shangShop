import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';

// 引入 store
import store from '@/store';

// 重写$router.push|replace 为解决路由跳转是传相同的参数，出现 NavigationDuplicated 的错误
// 参数1：location--往哪跳转， resolve--成功的回调， reject--失败的回调
// 1.重写push:先保存一份原有的push|replace方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
};
// ****call 与 apply 的区别****
/*
    相同点:都可以调用函数一次，都可以篡改函数的上下文一次
    不同点：传递的参数，call传递参数用逗号隔开；apply方法执行，传递数组
*/

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为设置，使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

// 路由:全局前置守卫：
router.beforeEach(async (to, from, next) => {
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行  
    //方便测试 统一放行
    //  next();
    //获取仓库中的token-----可以确定用户是登录了
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 如果用户有token 就是已登录
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/');
        } else {
            //已经登陆了,访问的是非登录与注册
            //登录了且拥有用户信息放行
            if (name) {
                next();
            } else {
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    // token 失效从新登陆
                    await store.dispatch('userLogin');
                    next('/login')
                }
            }
        }

    } else {
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect=' + toPath);
        } else {
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }

    }
});

export default router;