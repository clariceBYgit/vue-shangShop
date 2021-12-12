// home 小仓库
import {getBaseCategoryList} from '@/api'
const state = {
    categoryList:[]
};

const actions = {
    // 发送请求获取数据
    async getCategoryList({commit}){
        let result = await getBaseCategoryList();
        // console.log(result);
        if(result.code == 200){
            return commit('GETCATEGORYLIST',result.data);
        }
    
    }
}
// 修改state 
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
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