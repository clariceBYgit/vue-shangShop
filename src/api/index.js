import requests from './requests';
import mockRequests from './mockRequests';
import requsets from './requests';

// home search 三级联动接口
export const  reqGetBaseCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:'get'});

// 请求 mock数据   banners floors 
export const reqGetBannersList = ()=> mockRequests({url:'/banners',method:"get"});

//请求 mock数据 floor 数据
export const reqGetFloorList = () => mockRequests({url:'/floor',method:"get"});

// 请求 mock数据 search组件  参数至少是一个 空对象 post 
/**
 * 
 *{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
 */
export const reqGetSearchInfo = (params) => requests({url:'/list',method:"post",data:params});

// 获取商品详情  /api/item/skuId   get 
export const reqGetGoodDetails = (skuId) => requests.get(`/item/${ skuId }`);

// 7.添加到购物车(对已有物品进行数量改动)   /api/cart/addToCart/{ skuId }/{ skuNum }   post
export const reqaddOrUpdateShopCart = (skuId,skuNum) =>  requests.post(`/cart/addToCart/${skuId}/${skuNum}`);
 
// 6.获取购物车列表   /api/cart/cartList get 无参数
export const reqGetShopCartList = () => requests.get('/cart/cartList');

// 9.删除购物车商品 /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteShopCartGood = (skuId) => requests.delete(`/cart/deleteCart/${skuId}`);
// 8.切换商品选中状态   /api/cart/checkCart/{skuId}/{isChecked}  get
export const reqUpdateCheckedByid = (skuId,isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`);

// 获取 验证码  /api/user/passport/sendCode/{phone}  get
export const reqGetCode = (phone) => requests.get(`/user/passport/sendCode/${phone}`);

// 16.注册用户  /api/user/passport/register POST  参数 phone code password
export const reqReisterUser = (data) => requests({url:'/user/passport/register',data,method:'post'});

// 2.登录 /api/user/passport/login   POST 参数  phone password
export const reqUserLogin = (data) => requests({url:'/user/passport/login',data,method:'post'})

// 获取用户信息  /api/user/passport/auth/getUserInfo post  添加请求头 携带服务器下发的token
export const reqUserInfo = () => requsets.get('/user/passport/auth/getUserInfo');

//退出登陆 /api/user/passport/logout get
export const reqUserLogout = () => requsets.get('/user/passport/logout');

// 获取用户地址信息 /api/user/userAddress/auth/findUserAddressList get
// 由于原来的接口没有数据 此处改为 mock 数据
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
// export const reqAddressInfo = ()=>mockRequests({url:'/addressList',method:'get'});


// 获取订单交易页信息 商品清单 /api/order/auth/trade get
export const reqAuthTradeInfo = () =>requests.get('/order/auth/trade');

// ***********//
// 此处之后的操作 不使用 vuex

// 提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo} post
/**
 * 参数： 
 * traderNo  交易编号(拼接在路径中)
 * consignee 收件人姓名
 * consigneeTel 收件人电话
 * deliveryAddress 收件地址 
 * paymentWay  支付方式 (ONLINE代表在线)
 * orderComment  订单备注
 * orderDetailList 存储多个商品对象的数组
 *  
 */
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});


// 13.获取订单支付信息 /api/payment/weixin/createNative/{orderId} get 参数 orderId
export const reqPayInfo = (orderId) => requests.get(`/payment/weixin/createNative/${orderId}`)

// 14.查询支付订单状态  /api/payment/weixin/queryPayStatus/{orderId}  get   orderId
export const reqQueryPayStatus = orderId => requests.get(`/payment/weixin/queryPayStatus/${orderId}`)
