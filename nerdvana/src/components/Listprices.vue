<template>
    <div class="container mt-5" v-if="pricesData.length">
      <h4>Melhores preços para {{ game.name }}</h4>
      <ul>
        <li v-for="price in pricesData" :key="price.store_name">{{ price.store_name }} - {{ price.price }} - {{ price.url }}</li>
      </ul>
    </div>
</template>
  
  <script>
  export default {
    props: {
        pricesData: Array,
        game: Object
    }
  };
  </script>
  