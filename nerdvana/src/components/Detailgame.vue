<template>
    <div class="container mt-5" v-if="game">
        <div class="row">
            <div class="col-md-2">
                <img class="img-fluid" :src="imagePath" alt="">
            </div>
            <div class="col-md-5">
                <h3>{{ game.name }} <br /></h3>
                Lançamento: {{ game.release }} <br />
                Avaliação na Twitch: {{ game.rating }} <br /><br />
                <p style="text-align: justify;">Descrição: {{ game.summary }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        game: Object, // Pass the game object as a prop
        imagePath: String
    }
};
</script>
  