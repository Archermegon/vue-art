<template>
  <div class="home container">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './../components/Footer.vue'
  export default {
    name: "homeIndex",
    components: {
      Footer
    },
    data: () => ({
    })
  };
</script>

<style>
</style>