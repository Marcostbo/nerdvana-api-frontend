<template>
    <div class="container-fluid vh-100 bg-info" style="background-color: #000000 !important;">
        <div class="row">
            <div class="col-4 offset-4 mt-5">
                <div class="mt-4 bg-white p-5 rounded border">
                    <h2 class="text-center">Cadastro</h2>
                    <form>
                        <!-- Email input -->
                        <div class="form-outline mb-2">
                            <label class="form-label" for="form-register">E-mail</label>
                            <input type="email" id="email" class="form-control" v-model="email" />
                            <span class="text-danger small-text" v-if="invalidEmail"> E-mail já utilizado! </span>
                        </div>
                        <!-- Username input -->
                        <div class="form-outline mb-2">
                            <label class="form-label" for="form-register">Usuário</label>
                            <input type="text" id="username" class="form-control" v-model="username" />
                            <span class="text-danger small-text" v-if="invalidUsername"> Usuário já utilizado! </span>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form-register">Senha</label>
                            <input type="password" id="password" class="form-control" v-model="password" />
                        </div>
                    </form>
                    <div class="text-center d-grid gap-2">
                        <button type="button" class="btn btn-info mb-4 text-white" @click="handleRegister">Criar Conta</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { tokenStore } from '../stores.js'
import { login } from '../services/login.js'

export default {
    data() {
        return {
            email: '',
            username: '',
            password: '',
            passwordTooWeak: true,
            invalidEmail: false,
            invalidUsername: false,
        };
    },
    methods: {
        async handleRegister() {
            const REGISTER_URL = "http://127.0.0.1:8000/api/register";

            const form = new FormData();
            form.append("email", this.email);
            form.append("password", this.password);
            form.append("username", this.username);

            const options = {
                method: 'POST',
                body: form,
            };

            fetch(REGISTER_URL, options)
            .then(async response => {
                if (!response.ok) {
                    const errorData = await response.json();
                    if (errorData && errorData.email) {
                        this.invalidEmail = true;
                    }
                    if (errorData && errorData.username) {
                        this.invalidUsername = true;
                    }
                    throw new Error(errorData);
                }
                return response.json();
            })
            .then(async data => {
                const loginData = await login(data.email, this.password);
                console.log(loginData);
                localStorage.setItem('newToken', loginData.access);
                this.$router.push('/home');
            })
            .catch(err => console.error(err));
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
    font-size: 14px;
    /* Adjust the font size as needed */
}
</style>
