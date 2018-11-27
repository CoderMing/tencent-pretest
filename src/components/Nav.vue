<template>
  <div class="nav">
    <div class="nav-logo"></div>
    <img src="../assets/nav-tap.png" alt="菜单" class="nav-tap">
  </div>
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
  @import '../libs/util.styl'
  .nav
    size 100vw 12vw
    position fixed
    box-sizing border-box
    padding 0 3vw
    line-height 12vw
    .nav-logo
      size 30vw 8vw
      margin 2vw
      vertical-align middle
      bgimg url('../assets/logo.png') 
    .nav-tap
      vertical-align middle
      height 5vw
      padding 3.5vw
      position absolute
      right 0
      top 0
      
</style>
