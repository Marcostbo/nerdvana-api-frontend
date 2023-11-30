<template>
<navbar></navbar>
<div class="container-fluid d-flex vh-50 justify-content-center align-items-center" style="background-color: #000000 !important;">
    <div class="row">
        <h2 class="text-center text-white mt-5">Os melhores preços para seus jogos favoritos!</h2>
        <div class="col-10 offset-2 mt-5 mb-5">
            <search-bar></search-bar>
        </div>
    </div>
</div>
<div class="container">
  <div class="row mt-3">
  <h6 class="text-info"> | Melhores Jogos</h6>
  <div v-for="bestGame in bestGames" class="col-md-1" style="width: 13.33%; flex: 0 0 13.33%;max-width: 13.33%;">
    <img class="rounded border img-fluid img-sm" :src="bestGame.game_cover_link" alt="">
    <div class="small text-white">
      {{ bestGame.name }}
    </div>
  </div>
  <h6 class="text-info"> | Jogos mais buscados</h6>
  <div v-for="bestGame in bestGames" class="col-md-1" style="width: 13.33%; flex: 0 0 13.33%;max-width: 13.33%;">
    <img class="rounded border img-fluid img-sm" :src="bestGame.game_cover_link" alt="">
    <div class="small text-white">
      {{ bestGame.name }}
    </div>
  </div>
</div>
</div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import SearchBar from '@/components/Searchbar.vue';

  export default {
    components: {
      Navbar,
      SearchBar,
    },
    data() {
      return {
        bestGames: {}
      }
    },
    created: async function(){
        this.bestGames = await this.getBestGames();
    },
    methods: {
        async getBestGames() {
            const GET_BEST_GAMES = `http://127.0.0.1:8000/api/games?top_games=True`;
            const bestGamesResponse = await fetch(GET_BEST_GAMES);
            const bestGamesData = await bestGamesResponse.json();
            return bestGamesData
        }
    },
}
</script>