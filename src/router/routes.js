// 配置路由信息
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';

export default [
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
        component: Search,
        meta: {
            isShow: true
        }
    },
    {
        path: '/',
        redirect: '/home',

    }
]