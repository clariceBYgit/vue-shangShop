import { reqGetShopCartList, reqDeleteShopCartGood, reqUpdateCheckedByid } from '@/api';

const state = {
    cartList: []
};
const actions = {
    // 获取购物车数据列表
    async getShopCartList({ commit }) {
        const result = await reqGetShopCartList();
        if (result.code == 200) {
            commit('GETSHOPCARTLIST', result.data)
        }
    },
    // 删除 购物车里的某个产品
    async deleteShopGood({ commit }, skuId) {
        let result = await reqDeleteShopCartGood(skuId);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },
    // 切换商品选中状态 1 0 
    async updateCheckedByid({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('falie'));
        }
    },
    // 删除已选中的 全部商品  由于没有这个接口 则使用 删除一个商品的 接口
    // deleteAllCheckedCart(context){
    // console.log(context)      //context:小仓库，commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
    deleteAllCheckedCart({ getters, dispatch }) {
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            // 遍历全部的商品 判断其是否 isChecked 为 1  则为 选中 并 派发action 删除
            // 每一个 派一个action 都是返回的promise   多个promise对象 使用 promise.all 
            //Promise.all([p1,p2,p3])   p1,p2,p3:每一个都是Promise对象，如果有一个Promise失败，都失败 ； 如果都成功 则返回成功
            let promise = item.isChecked == 1 ? dispatch('deleteShopGood', item.skuId) : '';
            //    将每一个 返回的 promise 添加到数组中
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    },
    // 当前没有 全选 按钮 对所有购物车商品进行 选中或取消的切换 接口  此时 改用 修改一个商品的状态切换接口
    updateCheckedAllCart({ state, dispatch }, checked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            // 修改与 全选按钮 状态不一致的 商品
            let promise = dispatch('updateCheckedByid', { skuId: item.skuId, isChecked: checked });
            promiseAll.push(promise);

        })
        return Promise.all(promiseAll);
    }
};
const mutations = {
    GETSHOPCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const getters = {
    cartList() {
        return state.cartList[0] || {};
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}

