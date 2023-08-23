<template>
  <navbar></navbar>
  <div class="mt-4 ml-3">
    <div class="row">
      <div class="col-md-3">
        <input class="form-control" type="search" v-model="gameInput" placeholder="E.g., God of War, Elden Ring">
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary btn-block" @click.prevent="fetchGames()">Search</button>
      </div>
    </div>
  </div>
  <li v-for="game in gamesList">{{ game.name }} - {{ game.release }}</li>
  <h4>Recomendações</h4>
  <li v-for="game in recommendedGames">{{ game.name }} - {{ game.release }}</li>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      gameInput: "",
      gamesList: [],
      recommendedGames: []
    }
  },
  methods: {
    async fetchGames() {
      if (!this.gameInput) {
        return null;
      }
      this.gamesList = [];
      this.recommendedGames = [];
      // Get games
      const GAME_URL = `http://127.0.0.1:8000/api/games?name_contains=${this.gameInput}&limit=10&offset=0`;
      console.log(GAME_URL);

      const gamesResponse = await fetch(GAME_URL);
      const gamesData = await gamesResponse.json();
      this.gamesList = gamesData;
      console.log(this.gamesList);

      const firstGame = this.gamesList[0];

      const RECOMMENDER_URL = `http://127.0.0.1:8000/api/recommender?game_id=${firstGame.id}&console_id=3&number_of_recommendations=10`;

      // Get recommendations
      const gamesRecommender = await fetch(RECOMMENDER_URL);
      const recommendedData = await gamesRecommender.json();
      this.recommendedGames = recommendedData;
    }
  }
}
</script>