import { reqGetGoodDetails, reqaddOrUpdateShopCart } from '@/api';
// 封装游客身份模块 uuid
import { getUuid } from '@/utils/uuid_token';

const state = {
    // 商品详情数据
    detailList: {},
    // 游客临时登录
    uuid_token: getUuid()

};

const actions = {
    // 获取产品的 详情信息列表
    async getDetailList({ commit }, skuId) {
        let result = await reqGetGoodDetails(skuId);
        // console.log(result)
        if (result.code === 200) {
            return commit('GETDETAILLIST', result.data)

        }


    },
    // 将产品加入购物车
    /**
     * 发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
    //不需要在三连环（仓库存储数据了）
    //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
     * 
     */
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqaddOrUpdateShopCart(skuId, skuNum);
        // 判断服务器返回的失败还是成功
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    }
};

const mutations = {
    GETDETAILLIST(state, detailList) {
        state.detailList = detailList;
    }
}

const getters = {
    categoryView() {
        //Cannot read properties of undefined (reading 'category1Name')"
        return state.detailList.categoryView || {}
    },
    spuSaleAttrList() {
        return state.detailList.spuSaleAttrList || []

    },
    skuInfo() {
        return state.detailList.skuInfo || {};

    }
}

export default { actions, mutations, state, getters }