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
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import SearchBar from '@/components/Searchbar.vue';

  export default {
    components: {
      Navbar,
      SearchBar,
    },
}
</script>