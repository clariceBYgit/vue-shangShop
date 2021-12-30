import { reqAddressInfo ,reqAuthTradeInfo} from '@/api';

const state={
    userAddressList:[],
    orderInfo:{}
}

const actions={
    // 获取用户地址信息  前提 用户登录了 才可以获取
  async  getUserAddressList({commit}){
        let result = await reqAddressInfo();
        if (result.code ==200) {
            commit('GETUSERADDRESSLIST',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 获取订单交易页信息 商品清单
    async getAuthTradeInfo({commit}){
        let result = await reqAuthTradeInfo();
        console.log(result) 
        if (result.code ==200) {
            commit('GETAUTHTRADEINFO',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
}
const mutations={
    GETUSERADDRESSLIST(state,userAddressList){
        state.userAddressList = userAddressList;
    },
    GETAUTHTRADEINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const getters={}
export default{
    state,
    actions,
    mutations,
    getters
}