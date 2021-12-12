# 笔记

### 脚手架的文件布局以及其作用
    1.node_modules文件夹:项目的依赖包
    2.public文件夹:一般放置静态资源（图片），当webpack进行打包的时候，该文件中的静态资源会原封不动的打包到dist文件夹中
    3.src 文件夹 程序员代码文件夹：
        assets文件夹：静态资源（一般为多个组件公用的静态资源），当webpack打包的时候，会把静态资源当作一个模块，打包进js文件中
        components文件夹：一般放置非路由组件（全局组件）
        App.vue:唯一的跟组件
        main.js：程序的入口文件，真个程序中最先执行的文件
### 常见的设置
    1.启动项目后自动在浏览器中打开
	package.json中： "serve":vue-cli-services serve --open
    2.eslint校验功能关闭
	--根目录下创建 vue.config.js
		module.exports = {
			//关闭eslint
			lintOnSave:false
	
	}
    3.src文件夹简写方法，配置别名  @
	--根目录下创建 jsconfig.json 配置别名 @提示
{
	  "compilerOptions": {
	    "baseUrl": "./",
	    "paths": {
	        "@/*": ["src/*"]
	    }
	  },
	  "exclude": ["node_modules", "dist"]
	}


### 路由组件的搭建
   --components 文件夹：经常放置非路由组件
   --views/pages 文件夹： 路由组件
	1.创建router
		配置路由
	2.路由组件与非路由组件的区别？
		放置的位置一般不同
		路由：一般需要在router文件中进行注册（使用的即为组件的名字），组件身上都有$router,$rote属性。非路由组件在使用的时候，一般是以标签的形式使用
			$route:一般获取路由信息【路径，query，params等】
			$router:一般进行编程式导航进行路由跳转【push / replace】

	3.路由的跳转 ： 两种形式
		声明式导航 router-link(必须有to属性),可以进行路由的跳转
		编程式导航 利用组件实例的$router.push / replace,可以进行路由跳转，声明式导航能做的编程式都能，同时编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑
    4.路由传参，参数的几种写法
    params参数
    query参数：/home?k=v&kv= 
		


### 此项目 使用 less ，需要下载 less-loader 5版本的
    npm install --save less less-loader@5


### 函数的节流 与 防抖  可以使用第三方的 lodash 插件
	节流：_.throttle(func, [wait=0], [options=]) 在规定的间隔时间内不会重发触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发，也就是说如果连续快速的触发 只会执行一次

	防抖：_.debounce(func, [wait=0], [options=])  前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发

	总结： 用户操作很频繁，防抖只是执行一次，节流是把频繁的操作变为少量操作

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
