import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {}
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {

  },
})
