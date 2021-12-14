//引入 mockjs模块
import Mock from 'mockjs';
// 把JSON数据格式引入进来【JSON 数据格式根本没对外暴露却可以引入？】
// webpack默认对外暴露：图片，JSON数据格式
import banners from './banners.json';
import floors from './floors.json';

Mock.mock("/mock/banners",{code:200,data:banners});
Mock.mock("/mock/floor",{code:200,data:floors});