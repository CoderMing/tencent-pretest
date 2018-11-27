<template>
  <div class="carousel">
    <div 
      class="caro-con" 
      :style="`width: ${picList ? picList.length : 1}00vw`">
      <img
        v-for="item in picList"
        :key="item"
        class="caro-item"
        :src="item" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: [ 'picList' ],
  }
</script>

<style scoped lang="stylus">
  @import '../config/config.styl'
  .carousel
    size 100vw 92vw
    position relative
    left 0
    top 0
    .caro-con
      position absolute
      top 0
      left 0
      .caro-item
        size 100vw 92vw

</style>
