
// 二次封装 axios
import axios from 'axios'


// nprogress 进度条的使用
import nprogress from "nprogress";

// 引入进度条的样式（也可以在原css样式中进行样式的修改）
import "nprogress/nprogress.css";


// 1.利用axios对象的方法create，去创建一个axios实例
// 2.requsets就是axios，稍微配置一下
const requsets = axios.create({
    baseURL:'/mock',
    timeout:5000
})

// 请求拦截器:再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requsets.interceptors.request.use((config) => {
    // 开启进度条
    nprogress.start();
    return config;
});

// 响应拦截器
requsets.interceptors.response.use(
    (res) => {
    // 关闭进度条
    nprogress.done();
   return res.data;
} ,(error)=> {
    nprogress.done();

    return  Promise.reject(new Error('faile'));
})


export default requsets;    