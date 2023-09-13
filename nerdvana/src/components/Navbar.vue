<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info justify-content-between px-3"
    style="background-color: black !important;">
    <a class="navbar-brand" href="#">
      Nerdvana
    </a>
    <!-- Logged user -->
    <!-- Add dropdown to log out - Remove logged user -->
    <div class="mr-sm-2" v-if="Object.keys(loggedUser).length">
      <img class="btn-login" :src="loginImage" alt=""> {{ loggedUser.email }}
    </div>
    <!-- Unlogged user -->
    <div class="mr-sm-2" v-if="Object.keys(loggedUser).length === 0">
      {{ loggedUser.email }}
      <router-link to="/login" target="_blank" class="btn btn-outline-light btn-sm border-0 ml-2">
        <img class="btn-login" :src="loginImage" alt=""> Login
      </router-link> |
      <router-link to="/cadastro" target="_blank" class="btn btn-outline-light border-0 btn-sm ml-2">
        <img class="btn-created" src="https://img.icons8.com/nolan/64/door-opened.png" alt=""> Criar Conta
      </router-link>
    </div>
  </nav>
</template>

<script>
import login from '@/assets/icons8-customer-64.png';
import { tokenStore } from '../stores.js'

export default {
  data() {
    return {
      loginImage: login,
      clientToken: '',
      loggedUser: {}
    }
  },
  created: async function () {
    const newToken = localStorage.getItem('newToken');
    if (newToken) {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${newToken}`
        }
      };
      fetch('http://127.0.0.1:8000/api/logged-user', options)
        .then(response => response.json())
        .then(data => this.loggedUser = data)
        .catch(err => console.error(err));
    }
  }
}
</script>

<style scoped>
/* Additional custom styling if needed */
.btn-login {
  max-width: 2em;
  /* Adjust the size as needed */
  text-align: left;
  vertical-align: left;
}

.btn-created {
  max-width: 2em;
  /* Adjust the size as needed */
  text-align: left;
  vertical-align: left;
}
</style>