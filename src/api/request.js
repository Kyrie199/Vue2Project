//对于axios进行二次封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
//nprogress start方法:进度条开始 done:进度条结束

//1.利用axios对象的方法create，去创建一个axios实例
//2.request即为配置过的axios
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径中出现api
    baseURL:"/api",
    //设置请求超时时间
    timeout:5000
});

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config 配置对象 包含请求头headers

    //进度条启动
    nprogress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done();
    return res.data;
},(error) => {
        //响应失败
    return Promise.reject(new Error('fail'));
    }
)

//对外暴露
export default requests;