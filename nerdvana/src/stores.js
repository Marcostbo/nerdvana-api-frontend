import { defineStore } from 'pinia'

export const tokenStore = defineStore('token', {
  state: () => {
    return { token: '' }
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
  },
})
