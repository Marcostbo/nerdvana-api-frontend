<template>
  <div class="container mt-5" v-if="pricesData.length">
    <h4>Melhores preços para {{ game.name }}</h4>
    <div v-for="(price, index) in pricesData" :key="price.store_name" class="card border-info mb-3"
      style="max-width: 48rem;">
      <div class="card-header bg-primary text-white custom-card-header" v-if="index === 0">Menor Preço</div>
      <div class="card-body text-info">
        <div class="container">
          <div class="row">
            <div class="col-md-2 px-0 d-flex align-items-center">
              <img class="img-fluid custom-img-width" border="0" :src="getLogo(price)" alt="">
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <span class="align-middle">R$ {{ price.price }}</span>
            </div>
            <div class="col-md-6 text-right">
              <a :href="price.url" target="_blank" class="btn btn-primary float-end">Leve-me até lá</a>
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
  max-width: 17%;
  border-radius: 30px;
}
</style>