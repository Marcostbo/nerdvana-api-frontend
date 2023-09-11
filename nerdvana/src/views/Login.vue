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
                            <input type="email" id="form2Example1" class="form-control" />
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Senha</label>
                            <input type="password" id="form2Example2" class="form-control" />
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
                                <a href="#!" class="float-end">Esqueci a senha</a>
                            </div>
                        </div>
                    </form>
                    <div class="text-center d-grid gap-2">
                        <button type="button" class="btn btn-outline-primary mb-4">Entrar</button>
                    </div>
                    
                    <div class="text-center">
                        <p>Não possui conta? <router-link target="_blank" to="/cadastro">Registre-se</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
};
</script>
<style>
.custom-wider-div {
    width: 80%;
    /* Adjust the width as needed, e.g., 80% */

}
.mt-login {
    margin: 100px !important;
}
</style>
