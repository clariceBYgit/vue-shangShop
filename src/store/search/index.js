// search 小仓库
import { reqGetSearchInfo} from '@/api'
const state = {
    searchList:{}
};
const actions ={
    async getSearchList({commit},params = {}){
        // reqGetSearchInfo 在调用获取数据的时候，至少传递一个参数（空对象）
        // params 参数：是当用户派发action时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        // console.log(result)
        if(result.code === 200){
            return commit('GETSEARCHLIST',result.data)

        }
    }
}
// 修改state 
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
//简化仓库里的数据
const getters = {
    goodsList(){
        return state.searchList.goodsList || [];
    },
    trademarkList(){
        return state.searchList.trademarkList;

    },
    attrsList(){
        return state.searchList.attrsList;

    }
};
export default{
    state,
    mutations,
    actions,    
    getters
}