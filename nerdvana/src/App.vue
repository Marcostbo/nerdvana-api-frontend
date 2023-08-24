<template>
  <div>
    <navbar></navbar>
    <search-bar @search-games="fetchGames"></search-bar>
    <detail-game :game="gamesList[0]" :imagePath="imagePath"></detail-game>
    <recommended-games :recommended-games="recommendedGames" :game="gamesList[0]"></recommended-games>
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
      gamesList: [],
      recommendedGames: []
    };
  },
  methods: {
  async fetchGames(gameInput) {
    if (!gameInput) {
      return null;
    }
    this.gamesList = [];
    this.recommendedGames = [];
    // Get games
    const GAME_URL = `http://127.0.0.1:8000/api/games?name_contains=${gameInput}&limit=1&offset=0`;
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
};
</script>
