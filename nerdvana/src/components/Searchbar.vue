<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <input class="form-control mr-sm-2" type="search" v-model="gameInput"
                    placeholder="E.g., God of War, Elden Ring" @input="handleInput">
                <div v-if="dropdownOpen" class="col dropdown">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="game in games" :key="game.id" @click="selectGame(game)">{{ game.name }}</li>
                    </ul>
                </div>
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
            gameInput: "",
            games: [],
            dropdownOpen: false
        };
    },
    methods: {
        async fetchGames() {
            const GAME_URL = `http://127.0.0.1:8000/api/games?name_contains=${this.gameInput}&limit=5&offset=0`;
            const gamesResponse = await fetch(GAME_URL);
            const gamesData = await gamesResponse.json();
            this.games = gamesData;
            console.log(this.games);
        },
        handleInput() {
            if (this.gameInput.length >= 5) {
                this.fetchGames();
                this.dropdownOpen = true;
            } else {
                this.dropdownOpen = false;
                this.games = [];
            }
            console.log(this.dropdownOpen);
        },
        selectGame(game) {
            console.log(game);
            this.$emit("search-game", game.id);
            this.dropdownOpen = false;
        },
    }
};
</script>
  