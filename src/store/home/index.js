// home 小仓库
import {reqGetBaseCategoryList,reqGetBannersList, reqGetFloorList} from '@/api'
const state = {
    categoryList:[],
    bannerlist:[],
    floorList:[]
};

const actions = {
    // 发送请求获取数据
    async getCategoryList({commit}){
        let result = await reqGetBaseCategoryList();
        // console.log(result)
        if(result.code == 200){
            return commit('GETCATEGORYLIST',result.data);
        }
    
    },
    async getBannersList({commit}){
        let result = await reqGetBannersList();
        if(result.code ===200){
            return commit('GETBANNERSLIST',result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code ===200){
            return commit('GETFLOORLIST',result.data);

        }
    }
}
// 修改state 
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERSLIST(state,bannerlist){
        state.bannerlist = bannerlist;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }

};

const getters = {

};
export default{
    state,
    mutations,
    actions,    
    getters
}