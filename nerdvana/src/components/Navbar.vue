<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between px-3"
    style="background-color: #000046 !important;">
    <a class="navbar-brand" href="#">
      Nerdvana
    </a>
    <div class="mr-sm-2">
      <router-link to="/login" target="_blank" class="btn btn-outline-light ml-2">
        <img class="btn-login" :src="loginImage" alt=""> Login
      </router-link> |
      <button class="btn btn-outline-light mr-2">
        <img class="btn-created" src="https://img.icons8.com/nolan/64/door-opened.png" alt=""> Criar Conta
      </button>
    </div>
  </nav>
</template>

<script>
import login from '@/assets/icons8-customer-64.png';

export default {
  data() {
    return {
      loginImage: login
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
}</style>