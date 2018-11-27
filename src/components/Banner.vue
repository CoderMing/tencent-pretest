<template>
  <header class="banner">
    <Swiper :picList="picList" />
  </header>
</template>

<script>
  import Swiper from './Swiper.vue'
  
  export default {
    data () {
      return {

      }
    },    
    props: [ 'picList' ],
    components: {
      Swiper
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../config/config.styl'
  
  .banner
    size 100vw 92vw
    bgimg url(../assets/banner-img-2.png) 100% 100%
    overflow hidden
</style>
