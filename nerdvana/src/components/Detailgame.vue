<template>
    <div class="container mt-5" style="color: white;" v-if="game">
        <div class="row">
            <div class="col-md-2">
                <img class="rounded border img-fluid" :src="game.game_cover_link" alt="">
            </div>
            <div class="col-md-5">
                <h3>{{ game.name }} <br /></h3>
                <h6 class="text-info"> | Detalhes </h6>
                Lançamento: {{ game.release }} <br />
                Desenvolvedor: {{ game.game_company.name }} <br />
                Avaliação na Twitch<img class="rounded img-fluid custom-img-width" src="https://img.icons8.com/fluency/48/twitch.png"
                    alt="twitch" />: {{ game.rating }}/100 <br />
                <h6 class="text-info"> | Onde jogar </h6>
                <img class="bg-white rounded border p-1" width="48" height="48" src="https://img.icons8.com/color/48/ps4.png" alt="ps4"/>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-8">
                <h6 class="text-info"> | Descrição </h6>
                <p style="text-align: justify;"> {{ game.summary }}</p>
            </div>
        </div>
        <div class="row mt-1">
            <h6 class="text-info"> | Jogos similares a {{ game.name }} </h6>
            <div v-for="bestGame in bestGames" class="col-md-1" style="width: 13.33%; flex: 0 0 13.33%;max-width: 13.33%;">
                <img class="rounded border img-fluid img-sm" :src="bestGame.game_cover_link" alt="">
                <div class="small">
                    {{ bestGame.name }}
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
// import { GOOGLE_API_KEY, CX_ID } from '@/secrets.js';
// Unused watchers and methods. The image url now comes from the backend
export default {
    props: {
        game: Object,
    },
    data() {
        return {
            coverImage: '',
            bestGames: ''
        };
    },
    watch: {
        async game() {
            // this.coverImage = await this.getCover();
            this.bestGames = await this.getBestGames();
            console.log(this.bestGames);
        },
    },
    methods: {
        async getCover() {
            const query = `"${this.game.name}" site:https://howlongtobeat.com`
            const GET_IMAGE_URL = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CX_ID}&key=${GOOGLE_API_KEY}&safe=high`;
            const imageResponse = await fetch(GET_IMAGE_URL);
            const imageData = await imageResponse.json();
            console.log(imageData);
            const firstImageLink = imageData.items[0].pagemap.cse_image[0].src;
            console.log(firstImageLink);

            // Add new game to the json file
            const newLink = { "name": this.game.name, "link": firstImageLink };
            jsonData.push(newLink);

            return firstImageLink;
        },
        async getBestGames() {
            const gameId = this.game.id;
            const GET_COMPANY_GAMES_URL = `http://127.0.0.1:8000/api/recommender?game_id=${gameId}&console_id=3&number_of_recommendations=5`;
            console.log(GET_COMPANY_GAMES_URL);
            const bestGamesResponse = await fetch(GET_COMPANY_GAMES_URL);
            const bestGamesData = await bestGamesResponse.json();
            return bestGamesData
        }
    },
};
</script>


<style scoped>
.custom-img-width {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
.inline {
  display: inline !important;
}
</style>
  