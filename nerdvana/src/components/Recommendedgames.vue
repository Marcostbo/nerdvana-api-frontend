<template>
    <div class="container mt-5" v-if="recommendedGames.length">
      <h4>Jogos similares a {{ game.name }}</h4>
      <ul>
        <li v-for="game in recommendedGames" :key="game.id">{{ game.name }} - {{ game.release }}</li>
      </ul>
    </div>
</template>
  
  <script>
  export default {
    props: {
      recommendedGames: Array, // Pass the recommended games array as a prop
      game: Object // Pass the game object as a prop
    }
  };
  </script>
  