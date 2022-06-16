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
        console.log(this.token);
        
      }
    },
})

