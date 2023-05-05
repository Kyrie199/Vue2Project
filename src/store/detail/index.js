import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'

const state = {
    goodInfo:{}
};
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data)
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        //代表服务器加入购物车成功
        if(result.code == 200){
            return "ok"
        }else{
            //代表加入购物车失败
            return Promise.reject(new Error('failure'));
        }
    }
};
const getters = {
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[];
    },
    categoryView(state){
        return state.goodInfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}