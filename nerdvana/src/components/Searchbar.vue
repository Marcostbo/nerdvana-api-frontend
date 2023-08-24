<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <input class="form-control mr-sm-2" type="search" v-model="gameInput"
                    placeholder="E.g., God of War, Elden Ring">
            </div>
            <div class="col">
                <button class="btn btn-outline-primary" @click.prevent="fetchGames()">Search</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            gameInput: ""
        };
    },
    methods: {
        async fetchGames() {
            // Call the fetchGames method from the parent component
            this.$emit("search-games", this.gameInput);
        }
    }
};
</script>
  