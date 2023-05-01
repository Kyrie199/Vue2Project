//search模块仓库
import {reqSearchInfo} from "@/api";

const state = {
    searchList:{}
};
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchInfo({commit},params={}){//默认参数写法
        //调用函数时，至少传递一个参数（空对象）
        const result = await reqSearchInfo(params);
        if (result.code == 200){
            commit("GETSEARCHINFO",result.data)
        }
    }
};
const getters = {
    goodsList(state){
        return state.searchList.goodsList;
    },
    attrsList(state){
        return state.searchList.attrsList;
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}