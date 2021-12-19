import {reqGetGoodDetails} from '@/api';

const state = {
    // 商品详情数据
    detailList : {}
};

const actions = {
    async getDetailList({commit},skuId){
    
        let result =  await reqGetGoodDetails(skuId);
        console.log(result)
        if (result.code === 200){
            return commit('GETDETAILLIST',result.data)
            
        } 
  
  
        }
};

const mutations = {
    GETDETAILLIST(state,detailList){
        state.detailList =  detailList;
    }
}

const getters = {
    categoryView(){
        //Cannot read properties of undefined (reading 'category1Name')"
        return state.detailList.categoryView || {}
    },
    spuSaleAttrList(){
        return state.detailList.spuSaleAttrList || []

    },
    skuInfo(){
        return state.detailList.skuInfo || {};

    }
}

export default{actions,mutations,state,getters}