<template>
    <div class="container mt-5" v-if="game">
        <div class="row">
            <div class="col-md-2">
                <img class="rounded border img-fluid" :src="game.game_cover_link" alt="">
            </div>
            <div class="col-md-5">
                <h3>{{ game.name }} <br /></h3>
                Lançamento: {{ game.release }} <br />
                Desenvolvedor: {{ game.game_company.name }} <br />
                Avaliação na Twitch <img class="rounded img-fluid" src="https://img.icons8.com/fluency/48/twitch.png"
                    alt="twitch" />: {{ game.rating }}/100 <br /><br />
                <p style="text-align: justify;">Descrição: {{ game.summary }}</p>
            </div>
        </div>
    </div>
</template>
    
<script>
import { GOOGLE_API_KEY, CX_ID } from '@/secrets.js';
// Unused watchers and methods. The image url now comes from the backend
export default {
    props: {
        game: Object,
    },
    data() {
        return {
            coverImage: '',
        };
    },
    watch: {
        async game() {
            this.coverImage = await this.getCover();
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

        }
    },
};
</script>
  