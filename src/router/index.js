//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;

//重写push|replace
//第一个参数：告诉push方法传递的参数
VueRouter.prototype.push = function (location,resolve,reject){
    if (resolve && reject){
        originPush.call(this, location, resolve, reject);
    }else {
        originPush.call(this,location,()=>{ },()=>{ });
    }
}

export default new VueRouter({
    routes:[
        {
            path:'/detail/:skuid',
            component:Detail,
            meta:{
                footerShow:true
            }
        },
        {
            path:'/home',
            component:Home,
            meta:{
                footerShow:true
            }
        },
        {
            name:'Search',
            path:'/search/:keyword?',
            component:Search,
            meta:{
                footerShow:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        //重定向 项目启动的时候，访问/，定向到首页
        {
            path:'*',
            redirect:"/home"
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { x: 0,y: 0 }
    }
})