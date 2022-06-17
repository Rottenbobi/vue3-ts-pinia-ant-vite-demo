import { defineStore } from 'pinia'
import request from '../utils/request'


export const Layoutstore = defineStore('layout', {
  state: () => {
    return {  }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    getRouters(){
     return request.get('/getRouters')
    }
  },
})
