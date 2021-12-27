import { reqUserLogin, reqGetCode, reqReisterUser, reqUserInfo, reqUserLogout } from '@/api';
import { setToken, getToken, removeToken } from "@/utils/token";

const state = {
    token: getToken(),
    code: '',
    userInfo: {}

};
const actions = {
    // 获取注册验证码
    async getCode({ commit }, phone) {

        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok';
        } else {
            return Promise.reject(new Error("faile"));

        }

    },
    // 注册用户
    async reisterUser({ commit }, data) {
        let result = await reqReisterUser(data);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('falie'))
        }
    },
    // 用户登录
    async userLogin({ commit }, data) {
        // 获取服务器返回的token 
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息  
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户退出登录 
    async userLogout({ commit }) {
        let result = await reqUserLogout();
        if (result.code == 200) {
            commit('CLEAR');
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    // 清除本地数据
    CLEAR(state) {
        state.userInfo = {};
        state.token = '';
        // 本地存储数据清空
        removeToken();

    }

}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}
