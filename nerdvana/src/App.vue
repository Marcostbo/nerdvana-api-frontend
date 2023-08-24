<template>
  <div>
    <navbar></navbar>
    <search-bar @search-game="fetchGame"></search-bar>
    <detail-game v-if="Object.keys(gameData).length" :game="this.gameData" :imagePath="imagePath"></detail-game>
    <recommended-games :recommended-games="recommendedGames" :game="this.gameData"></recommended-games>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import myImage from '@/assets/eldenring.jpg';
import SearchBar from './components/Searchbar.vue';
import DetailGame from './components/Detailgame.vue';
import RecommendedGames from './components/Recommendedgames.vue';

export default {
  components: {
    Navbar,
    SearchBar,
    DetailGame,
    RecommendedGames
  },
  data() {
    return {
      imagePath: myImage,
      gameData: {},
      recommendedGames: []
    };
  },
  methods: {
  async fetchGame(game_id) {
    if (!game_id) {
      return null;
    }
    this.gamesList = [];
    this.recommendedGames = [];
    // Get games
    const GAME_URL = `http://127.0.0.1:8000/api/games/${game_id}/`;
    console.log(GAME_URL);

    const gameResponse = await fetch(GAME_URL);
    const gameData = await gameResponse.json();
    this.gameData = gameData;
    console.log(this.gameData);

    const RECOMMENDER_URL = `http://127.0.0.1:8000/api/recommender?game_id=${game_id}&console_id=3&number_of_recommendations=10`;

    // Get recommendations
    const gamesRecommender = await fetch(RECOMMENDER_URL);
    const recommendedData = await gamesRecommender.json();
    this.recommendedGames = recommendedData;
  }
}
};
</script>
