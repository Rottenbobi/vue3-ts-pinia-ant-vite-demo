import { defineStore } from 'pinia'
import request from '../utils/request'
import * as LayoutD from '@/dts/Layout.D'

export const Layoutstore = defineStore('layout', {
  state: () => {
    return {
      routerList: [] as Array<LayoutD.IrouterList>

    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    getRouters() {
      return request.get('/getRouters')
    },
    SetrouterList(payload: Array<LayoutD.IrouterList>) {
      this.routerList = payload
    }
  },
})
