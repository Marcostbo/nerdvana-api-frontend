<template>
    <div class="container-fluid vh-100 bg-info" style="background-color: #000000 !important;">
        <div class="row">
            <div class="col-4 offset-4 mt-5">
                <div class="mt-4 bg-white p-5 rounded border">
                    <h3 class="text-center">
                        Validar e-mail
                    </h3>
                    <div class="text-center">
                        Para ter toda a experiência no site, precisamos que valide seu e-mail
                    </div>
                    <div class="text-center d-grid">
                        <button type="button" class="btn btn-info mb-4 text-white mt-2" @click="handleCode">Gerar
                            Código
                        </button>
                        <small v-if="codeGenerated" class="form-text text-muted">
                            Foi enviado um e-mail para {{ loggedUser.email }}
                        </small>
                    </div>
                    <div v-if="codeGenerated">


                        <div class="form mt-3 text-center">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Código gerado</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o código">
                            </div>
                        </div>
                        <div class="text-center d-grid gap-2 mt-2">
                            <button type="button" class="btn btn-info mb-4 text-white mt-2" @click="handleRegister">
                                Validar e-mail
                            </button>
                        </div>
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
            loggedUser: {},
            codeGenerated: false
        };
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
    },
    methods: {
        handleCode() {
            this.codeGenerated = true;
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
