<template>
  <div>
    <navbar></navbar>
    <search-bar @search-game="fetchGame"></search-bar>
    <detail-game v-if="Object.keys(gameData).length" :game="this.gameData" :imagePath="imagePath"></detail-game>
    <recommended-games :recommended-games="recommendedGames" :game="this.gameData"></recommended-games>
    <list-prices :prices-data="pricesData" :game="this.gameData"></list-prices>
  </div>
</template>

<script>
import myImage from '@/assets/eldenring.jpg';

import Navbar from './components/Navbar.vue';
import SearchBar from './components/Searchbar.vue';
import DetailGame from './components/Detailgame.vue';
import RecommendedGames from './components/Recommendedgames.vue';
import Listprices from './components/Listprices.vue';

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
      recommendedGames: [],
      pricesData: []
    };
  },
  methods: {
  async fetchGame(gameId, consoleId) {
    if (!gameId) {
      return null;
    }
    this.gamesList = [];
    this.recommendedGames = [];
    // Get games
    const GAME_URL = `http://127.0.0.1:8000/api/games/${gameId}/`;
    console.log(GAME_URL);

    const gameResponse = await fetch(GAME_URL);
    const gameData = await gameResponse.json();
    this.gameData = gameData;
    console.log(this.gameData);

    const RECOMMENDER_URL = `http://127.0.0.1:8000/api/recommender?game_id=${gameId}&console_id=${consoleId}&number_of_recommendations=10`;

    // Get recommendations
    const gamesRecommender = await fetch(RECOMMENDER_URL);
    const recommendedData = await gamesRecommender.json();
    this.recommendedGames = recommendedData;

    const PRICING_URL = `http://127.0.0.1:8000/api/gamepricing?console_id=${consoleId}&game_id=${gameId}`
    const gamePricing = await fetch(RECOMMENDER_URL);
    const pricesData = await gamePricing.json();
    this.pricesData = pricesData;
  }
}
};
</script>
