<template>
  <div 
    class="static-info"
    :class="colorMode">
    <div 
      class="stai-item"
      v-for="item in infoData"
      :key="item.name">
      <div class="item-name">{{item.name}}</div>
      <div class="item-num">{{item.num}}
        <span>{{item.suffix}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },

    props: [ 'infoData', 'colorMode' ],
    components: {

    }
  }
</script>

<style scoped lang="stylus">
  @import '../config/config.styl'
  .static-info
    width 92vw
    margin 2vw auto 0
    border-radius 2vw
    display flex
    font-size 4vw
    &.dark
      color $base-section-color
      background-color transparent
    &.light
      color #808bb7
      background-color $base-section-color
      div.item-num
        color $base-h1-color
    .stai-item
      padding 4vw 5vw
      flex 1
      div.item-name
        line-height 2em
      div.item-num
        font-size 5.8vw
        font-weight 500
        span
          font-size 60%

    
 
</style>
