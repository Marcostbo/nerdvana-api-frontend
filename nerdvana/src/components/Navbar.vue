<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info justify-content-between px-3"
    style="background-color: black !important;">
    <div class="container">
    <a class="navbar-brand" href="#">
      Nerdvana
    </a>
    <div class="me-auto">
      |
      <button class="btn btn-outline-light border-0" type="button" aria-expanded="false">
          Home
      </button>
    </div>
    <!-- Logged user -->
    <!-- Add dropdown to log out - Remove logged user -->
    <div class="mr-sm-2" v-if="isLogged">
      <div class="dropdown">
        <button class="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img class="btn-login" :src="loginImage" alt=""> {{ loggedUser.username }}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
          </ul>
      </div>
    </div>
    <!-- Unlogged user -->
    <div class="mr-sm-2" v-if="!isLogged">
      {{ loggedUser.email }}
      <router-link to="/login" target="_blank" class="btn btn-outline-light btn-sm border-0 ml-2">
        <img class="btn-login" :src="loginImage" alt=""> Login
      </router-link> |
      <router-link to="/cadastro" target="_blank" class="btn btn-outline-light border-0 btn-sm ml-2">
        <img class="btn-created" src="https://img.icons8.com/nolan/64/door-opened.png" alt=""> Criar Conta
      </router-link>
    </div>
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
      isLogged: false,
      loggedUser: {}
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('newToken');
      this.isLogged = false;
      location.reload();
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
      try {
        const response = await fetch('http://127.0.0.1:8000/api/logged-user', options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.loggedUser = data;
        this.isLogged = true;
      } catch (err) {
        console.error(err);
      }
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