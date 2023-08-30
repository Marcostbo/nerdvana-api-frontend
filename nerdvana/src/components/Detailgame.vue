<template>
    <div class="container mt-5" v-if="game">
        <div class="row">
            <div class="col-md-2">
                <img v-if="coverImage" class="img-fluid" :src="coverImage" alt="">
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
            console.log('PASSOU AQUI WATCH');
            this.coverImage = await this.getCover();
        },
    },
    methods: {
        async getCover() {
            const apiKey = 'AIzaSyCjUd6JnP2aKy2AsQJVvWYsgdBIo0MnWQk';
            const cxId = '82e41cc0cbab7438c';
            // const query = `"${this.game.name} Box Art"`;
            const query = `"${this.game.name}" site:https://howlongtobeat.com`

            const GET_IMAGE_URL = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cxId}&key=${apiKey}&safe=high`;

            const imageResponse = await fetch(GET_IMAGE_URL);
            const imageData = await imageResponse.json();
            
            console.log(imageData);

            const firstImageLink = imageData.items[0].pagemap.cse_image[0].src;
            return firstImageLink;
        },
    },
};
</script>
  