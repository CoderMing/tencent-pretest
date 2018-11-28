<template>
  <div class="banner" :style="`background-image: url(${imgUrl || ''})`">
  </div>
</template>

<script>  
  export default {
    data () {
      return {

      }
    },    
    props: [ 'imgUrl' ],
    components: {

    }
  }
</script>

<style lang="stylus" scoped>
  @import '../config/config.styl'
  
  .banner
    size 100vw 92vw
    bgimg url(../assets/banner-img-2.png) cover
    overflow hidden
</style>
