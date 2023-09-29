<template>
  <div class="container mt-5 mb-5" style="color: white;" v-if="pricesData.length">
    <div class="row">
      <div class="col-7">
        <h4 class="text-info inline"> | </h4>
        <h4 class="inline"> Melhores preços para {{ game.name }} </h4>
        <h6 class="mt-2"> Compare o preço em {{ pricesData.length }} lojas! </h6>
      </div>
      <div class="col-2 custom-col">
        <Createalert :game="game"></Createalert>
      </div>
    </div>
    <div class="row">
      <div class="col-9"></div>
    </div>
    <div v-for="(price, index) in pricesData" :key="price.store_name" class="card"
      :class="index === 0 ? 'border-info mb-0 rounded-bottom-0' : 'border-secondary rounded-0 border-top-0'"
      style="max-width: 52rem;">
      <div class="card-header bg-info text-white custom-card-header" v-if="index === 0">Menor preço</div>
      <div class="card-body text-info align-items-center d-flex custom-card-h align-items-center d-flex custom-card-h"
        style="background-color: #2d2d30 !important;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-2 px-0 d-flex">
              <img class="img-fluid bg-white p-2 rounded border" :src="getLogo(price)" alt="">
            </div>
            <div class="col-md-4 d-flex" :class="index === 0 ? 'text-info' : 'text-white'">
              <span class="align-middle">R$ {{ price.price }}</span>
            </div>
            <div class="col-md-6 text-right">
              <a :href="price.url" target="_blank" class="btn text-white float-end"
                :class="index === 0 ? 'btn-info' : 'btn-dark'">Ir a Loja</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import americanas from '@/assets/storelogos/americanas.png';
import magalu from '@/assets/storelogos/magazineluiza.png';
import shoptime from '@/assets/storelogos/shoptime.png';
import kabum from '@/assets/storelogos/kabum.png';
import submarino from '@/assets/storelogos/submarino.png';
import casasbahia from '@/assets/storelogos/casasbahia.png';
import ponto from '@/assets/storelogos/pontofrio.png';

import Createalert from '@/components/Createalert.vue';

const logos = {
  'Americanas': americanas,
  'Magazine Luiza': magalu,
  'Shoptime': shoptime,
  'KaBuM!': kabum,
  'Submarino': submarino,
  'Casas Bahia': casasbahia,
  'Ponto Frio': ponto
};

export default {
  components: {
    Createalert
  },
  props: {
    pricesData: Array,
    game: Object
  },
  methods: {
    getLogo(price) {
      return logos[price.store_name];
    }
  }
};
</script>

<style>
.custom-img-width {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.custom-card-header {
  /* max-width: 15%; */
  border-radius: 30px;
  height: 2.2rem;
  font-size: small;
}

.custom-card {
  border-radius: 12120910920px;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
}

.custom-card-h {
  height: 120px;
}

.inline {
  display: inline !important;
}

.custom-col {
  text-align: right;
}

</style>