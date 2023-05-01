//当前模块：API进行统一管理
import requests from "@/api/request";
import mockRequest from "@/api/mockRequest";

//三级联动接口 /api/product/getBaseCategoryList get请求无参数
export const reqCategoryList = () =>
    //发送请求 在requests.js中配置了baseURL '/api',url中可以省略
    requests({url:'/product/getBaseCategoryList',method:'get'});

    //发送请求 获取banner轮播图的接口
    export const reqBannerList = () => mockRequest({url:'/banner',method:'get'});

    //发送请求 获取floor数据接口
    export const reqFloorList = () => mockRequest({url:'/floor',method:'get'})

    //获取search数据接口
    export const reqSearchInfo = (params) => requests({url:"/list",method:"post",data:params})

    //获取产品详情
    export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:"get"})

    //添加修改购物车请求
    export const reqAddOrUpdateShopCart = (skuId, skuNum ) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
