import axios from "axios";

const request = axios.create({
    baseURL: 'http://liufusong.top:8888',
    timeout: 50000
})
// 数据请求拦截
request.interceptors.request.use((config) => {
    if (config.headers) {
        if (localStorage.getItem('CRMtoken')) {
            let token = JSON.parse(localStorage.getItem('CRMtoken') as string)
            // console.log(token);
            let atoken = `Bearer ${token.token.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\>|\/|\?]/g,"")}` 
            // console.log(atoken);
            config.headers.Authorization = atoken
        }

        // config.headers.Authorization =
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default request
// module.exports = request