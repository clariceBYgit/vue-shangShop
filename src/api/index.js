import requests from './requests';
// home search 三级联动接口
export const  getBaseCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:'get'});