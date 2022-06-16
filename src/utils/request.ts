import axios from "axios";

const request = axios.create({
    baseURL:'http://liufusong.top:8888',
    timeout: 50000 
})
// 数据请求拦截
// request.interceptors.request.use((config) => {
//    if(config.headers){
//     config.headers.Authorization = localStorage.getItem('Shoptoken')as string
//    }
//     return config;
//   }, (error) => {
//     return Promise.reject(error);
//   });

export default request
// module.exports = request