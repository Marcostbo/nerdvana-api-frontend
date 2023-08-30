<template>
  <div class="container mt-5" v-if="pricesData.length">
    <h4> <img width="48" height="48" src="https://img.icons8.com/fluency/48/price-tag.png" alt="price-tag"/> Melhores preços para {{ game.name }}</h4>
    <h6> Compare o preço em {{ pricesData.length }} lojas! </h6>
    <div v-for="(price, index) in pricesData" :key="price.store_name" 
    class="card" :class="index === 0 ? 'border-info mb-0 rounded-bottom-0' : 'border-secondary rounded-0 border-top-0'"
    style="max-width: 48rem;">
      <div class="card-header bg-info text-white custom-card-header" v-if="index === 0">Menor preço</div>
      <div class="card-body text-info">
        <div class="container">
          <div class="row">
            <div class="col-md-2 px-0 d-flex align-items-center">
              <img class="img-fluid custom-img-width" border="0" :src="getLogo(price)" alt="">
            </div>
            <div class="col-md-4 d-flex align-items-center" :class="index === 0 ? 'text-info' : 'text-dark'">
              <span class="align-middle font-weight-bold">R$ {{ price.price }}</span>
            </div>
            <div class="col-md-6 text-right">
              <a :href="price.url" target="_blank" class="btn btn-info text-white float-end">Ir a Loja</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import americanas from '@/assets/storelogos/americanas.png'
import magalu from '@/assets/storelogos/magazineluiza.png'
import shoptime from '@/assets/storelogos/shoptime.png'
import kabum from '@/assets/storelogos/kabum.png'
import submarino from '@/assets/storelogos/submarino.png'
import casasbahia from '@/assets/storelogos/casasbahia.png'
import ponto from '@/assets/storelogos/pontofrio.png'

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
    /* border-radius: 50%; */
}
.custom-card-header {
  max-width: 15%;
  border-radius: 30px;
  height: 2rem;
  font-size: small;
}
.custom-card {
  border-radius: 12120910920px;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
}
</style>