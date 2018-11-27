<template>
  <nav class="nav">
    <div class="nav-logo"></div>
    <div class="nav-tap"></div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus">
  @import '../config/config.styl'
  .nav
    size 100vw 12vw
    position fixed
    line-height 12vw
    .nav-logo
      size 30vw 8vw
      margin 2vw
      vertical-align middle
      bgimg url('../assets/logo.png') 
    .nav-tap
      vertical-align middle
      size 5vw
      position absolute
      right 3.5vw
      top 3.5vw
      bgimg url('../assets/nav-tap.png')
      
</style>
