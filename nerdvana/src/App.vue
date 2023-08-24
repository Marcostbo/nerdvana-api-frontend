<template>
  <navbar></navbar>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <input class="form-control mr-sm-2" type="search" v-model="gameInput" placeholder="E.g., God of War, Elden Ring">
      </div>
      <div class="col">
        <button class="btn btn-outline-primary" @click.prevent="fetchGames()">Search</button>
      </div>
    </div>
  </div>
  <div v-if="this.gamesList.length" class="container mt-5">
    <div class="row">
      <div class="col-md-2">
        <img class="img-fluid" :src="imagePath" alt="">
      </div>
      <div class="col-md-5">
        <h3>{{ this.gamesList[0].name }} <br/></h3>
        Lançamento: {{ this.gamesList[0].release }} <br/>
        Avaliação na Twitch: {{ this.gamesList[0].rating }} <br/><br/>
        <p style="text-align: justify;">Descrição: {{ this.gamesList[0].summary }}</p>
      </div>
    </div>
    <h4 v-if="gamesList.length">Jogos similares a {{ this.gamesList[0].name }}</h4>
    <li v-for="game in recommendedGames">{{ game.name }} - {{ game.release }}</li>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import myImage from '@/assets/eldenring.jpg';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      imagePath: myImage,
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
      const GAME_URL = `http://127.0.0.1:8000/api/games?name_contains=${this.gameInput}&limit=1&offset=0`;
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