<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <input class="form-control mr-sm-2" type="search" v-model="gameInput"
                    placeholder="E.g., God of War, Elden Ring" @input="handleInput">
                <div v-if="dropdownOpen" class="col dropdown">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action" v-for="game in games" :key="game.id"
                            @click="selectGame(game)">{{
                                game.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-2">
                <select class="form-select" v-model="consoleInput" aria-label="Default select example">
                    <option selected>...</option>
                    <option v-for="console in consoles" :value="console.name"> {{ console.name }} </option>
                </select>
            </div>
            <div class="col">
                <button class="btn btn-outline-info" @click.prevent="selectGameAPI()">
                    Buscar
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
import router from '../routes';

export default {
    data() {
        return {
            gameInput: "",
            consoleInput: "",
            gameDetail: {},
            consoles: [
                { 'id': '3', 'name': 'PS4' },
                { 'id': '4', 'name': 'XBOX One' },
                { 'id': '7', 'name': 'PS5' },
                { 'id': '8', 'name': 'XBOX Series S|X' },
            ],
            games: [],
            dropdownOpen: false
        };
    },
    methods: {
        async fetchGames() {
            const GAME_URL = `http://127.0.0.1:8000/api/games?name_contains=${this.gameInput}&limit=5&offset=0`;
            const gamesResponse = await fetch(GAME_URL);
            const gamesData = await gamesResponse.json();
            console.log(gamesData);
            this.games = gamesData.results;
        },
        handleInput() {
            if (this.gameInput.length >= 5) {
                this.fetchGames();
                this.dropdownOpen = true;
            } else {
                this.dropdownOpen = false;
                this.games = [];
            }
        },
        selectGame(game) {
            this.gameInput = game.name;
            this.gameDetail = game;
            this.dropdownOpen = false;
        },
        selectGameAPI() {
            const consoleObj = this.consoles.find(console => console.name === this.consoleInput);
            const consoleId = consoleObj ? consoleObj.id : null;

            // this.$emit("search-game", this.gameDetail.id, consoleId);
            this.dropdownOpen = false;

            const routeData = this.$router.resolve({ name: 'home', params: { newGameId: this.gameDetail.id, newConsoleId: consoleId } });
            window.open(routeData.href, '_blank');

        },
    }
};
</script>
  