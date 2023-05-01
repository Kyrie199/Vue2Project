import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//三级联动组件--全局组件
import TypeNav from './components/TypeNav'
// 轮播图
import Carousel from './components/Carousel'
//分页器
import Pagination from './components/Pagination'
//第一个参数：全局组件的名字 第二个参数：哪个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//引入仓库
import store from '@/store'

//引入mockServer.js ---mock数据
import '@/mock/mockServer'

//引入swiper样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  //全局事件总线$bus的配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,//KV一致
  //注册仓库 组件实例身上会多一个$store属性
  store
}).$mount('#app')
