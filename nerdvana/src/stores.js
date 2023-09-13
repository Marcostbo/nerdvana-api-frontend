import { defineStore } from 'pinia'

export const tokenStore = defineStore('counter', {
  state: () => {
    return { token: '' }
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
  },
})
