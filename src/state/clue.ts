import { defineStore } from 'pinia'
import request from '../utils/request'
import * as ClueD from '@/dts/clue.D'

export const ClueStore = defineStore('clue', {
  state: () => {
    return {
      total: 0,
      cluelist: [] as ClueD.IclueList1[],
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    getClueList: (params: ClueD.IclueList) => {
      return request.get('clues/clue/list', { params })
    },
    setClueList(payload: any) {
      this.total = payload.data.total
      this.cluelist = payload.data.rows
    }
  },
})
