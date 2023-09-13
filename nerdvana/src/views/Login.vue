<template>
    <div class="container-fluid vh-100 bg-info" style="background-color: #000000 !important;">
        <div class="row">
            <div class="col-4 offset-4 mt-5">
                <div class="mt-4 bg-white p-5 rounded border">
                    <h2 class="text-center">Login</h2>
                    <form>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">Usuário ou E-mail</label>
                            <input type="email" id="form2Example1" class="form-control" v-model="username" />
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Senha</label>
                            <input type="password" id="form2Example2" class="form-control" v-model="password" />
                            <span class="text-danger small-text" v-if="loginError"> Login ou senha incorretos </span>
                        </div>
                        <!-- 2 column grid layout for inline styling -->
                        <div class="row mb-4">
                            <div class="col">
                                <!-- Checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31"> Lembre de mim </label>
                                </div>
                            </div>

                            <div class="col">
                                <!-- Simple link -->
                                <a href="#!" class="float-end text-info">Esqueci a senha</a>
                            </div>
                        </div>
                    </form>
                    <div class="text-center d-grid gap-2">
                        <button type="button" class="btn btn-info mb-4 text-white" @click="handleLogin">Entrar</button>
                    </div>

                    <div class="text-center">
                        <p>Não possui conta? <router-link class="text-info" target="_blank"
                                to="/cadastro">Registre-se</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { tokenStore } from '../stores.js'

export default {
    data() {
        return {
            username: '',
            password: '',
            token: '',
            loginError: false
        };
    },
    methods: {
        async handleLogin() {
            const LOGIN_URL = "http://127.0.0.1:8000/api/token";

            const formData = new FormData();
            formData.append('email', this.username);
            formData.append('password', this.password);

            fetch(LOGIN_URL, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (!response.ok) {
                    this.loginError = true;
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
                .then((data) => {
                    this.loginError = false;
                    const store = tokenStore();
                    store.setToken(data.access);
                    console.log(tokenStore().token);
                    this.$router.push('/home');
                })
                .catch((error) => {
                    console.error('Fetch error:', error);
                });
        }
    }
};
</script>
<style scoped>
.custom-wider-div {
    width: 80%;
    /* Adjust the width as needed, e.g., 80% */

}
.mt-login {
    margin: 100px !important;
}
.small-text {
    font-size: 14px; /* Adjust the font size as needed */
}
</style>
