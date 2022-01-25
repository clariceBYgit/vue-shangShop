// 配置路由信息
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
// import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder';

//路由的懒加载  
/* 
component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
    初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度
*/

export default [
    {
        path:'/center',
        name:'center',
        component:Center,
        children: [
            {
              // 当 /user/:id/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 <router-view> 中
              path: 'myorder',
              component: MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ],

        meta:{
            isShow:true
        }
    },
    {
        path: '/pay',
        name:'pay',
        component: Pay,
        meta: {
            isShow: true
        }
    },
    {
        path: '/paysuccess',
        name:'paysuccess',
        component: PaySuccess,
        meta: {
            isShow: true
        }
    },
    {
        path: '/trade',
        name:'trade',
        component: Trade,
        meta: {
            isShow: true
        }
    },
    {
        path: '/register',
        name:'register',
        component: Register,
        meta: {
            isShow: true
        }
    },
    {
        path: '/login',
        name:'login',
        component: Login,
        meta: {
            isShow: true
        }
    },
    {
        path: '/shopcart',
        name:'shopcart',
        component: ShopCart,
        meta: {
            isShow: true
        }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            isShow: true
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            isShow: true
        }
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: {
            isShow: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isShow: false
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isShow: false
        }
    },
    {
        // 代表 params参数可传不可传
        path: '/search/:keyword?',
        name: 'search',
        component: () => import ('@/pages/Search'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/',
        redirect: '/home',

    },
    // 组件通信 高级 测试
    {
        path:'/communication',
        component: () => import('@/pages/Communication'),
        children:[
            {
                path:'event',
                component:()=>import('@/pages/Communication/EventTest'),
                meta:{
                    isHideFooter:true
                }
            },
            {
                path:'model',
                component:()=>import('@/pages/Communication/ModelTest'),
                meta:{
                    isHideFooter:true
                }
            },
            {
                path:'sync',
                component:()=>import('@/pages/Communication/SyncTest'),
                meta:{
                    isHideFooter:true
                }
            },
            {
                path:'attrs-listener',
                component:()=>import('@/pages/Communication/AttrsListenersTest'),
                meta:{
                    isHideFooter:true
                }
            },
            {
                path:'children-parent',
                component:()=>import('@/pages/Communication/ChildrenParentTest'),
                meta:{
                    isHideFooter:true
                }
            },
            {
                path:'scope-slot',
                component:()=>import('@/pages/Communication/ScopeSlotTest'),
                meta:{
                    isHideFooter:true
                }
            },
        ]
    }




]