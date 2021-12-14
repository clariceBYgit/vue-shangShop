import requests from './requests';
import mockRequests from './mockRequests';

// home search 三级联动接口
export const  getBaseCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:'get'});

// 请求 mock数据   banners floors 
export const getBannersList = ()=> mockRequests({url:'/banners',method:"get"});

//请求 mock数据 floor 数据
export const getFloorList = () => mockRequests({url:'/floor',method:"get"});