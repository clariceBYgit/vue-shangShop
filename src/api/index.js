import requests from './requests';
import mockRequests from './mockRequests';

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

