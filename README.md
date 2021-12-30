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

### 开发Home首页当中的ListContainer组件与Floor组件
	mock数据：npm install -S mockjs
	使用步骤：
		1）src中创建mock文件夹
		2）准备json数据
		3）把mock数据需要的图片，放至public文件下
		4）出创建 mockServer.js
		5)mockServer.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）
### 动态开发面包屑中的 关键字
	当面包屑中清楚关键字的时候  其兄弟组件 Header中的关键字也进行清楚
		组件通信
			1.props：父子
			2.自定义事件：子-父
			3.vuex：万能
			4.pubsub.js:万能
			5.$bus:全局事件总线   $on $emit 

### 分页器展示，需要那些数据（条件）？
	需要知道当前是第几个：pageNo 当前页数
	需要知道每一个需要展示多少条数据：pageSize
	需要知道整个分页一共有多少条数据：total  --- [获取另外一条信息：一共多少页]
	需要知道分页器连续页码的个数：5 | 7 【奇数】 continues

	例如： 每一页3条数据 一共91条数据   【一共是31页】


### uuid 临时游客身份
	

### 注册业务
	获取 验证码的接口   /api/user/passport/sendCode/{phone}  get

### 登录业务
	注册---通过数据库存储用户信息  名字，密码
	登录-- 登录成功，后台为区分用户，服务器下发token
		登录接口：此处不够完美，一般登录成功服务器会下发token，前台持久化存储token ,[带着token找服务器要用户信息展示]


###　按需引入　Element　Ｕｉ
	npm i element-ui -S
	同时安装　npm install babel-plugin-component -D
	将 babel.config 修改为：
	{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

###  自动生成 支付 二维码  qrcode
	npm install --save qrcode