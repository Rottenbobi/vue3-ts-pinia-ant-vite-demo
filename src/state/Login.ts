import { defineStore } from 'pinia'
import request from '../utils/request'
import *as LoginD from '@/dts/Login.d'
 export const LoginStore = defineStore('counter', {
    state: () => {
        return {
          token:''
        }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
      getimg(){
       return request.get('/captchaImage')
      },
      userLogin(data:LoginD.ilogin){
        return request.post('/login',data)
      },
      getToken(payload:string){
        this.token = payload
        // console.log(this.token);
      }
    },
    persist: {
      // 修改存储中使用的键名称，默认为当前 Store的 id
      key: 'CRMtoken',
      // 修改为 sessionStorage，默认为 localStorage
      storage: window.localStorage,
      // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
      paths: ['token'],
    }
})

