<template>
  <div 
    class="static-info"
    :class="colorMode">
    <div 
      class="stai-item"
      v-for="item in infoData"
      :key="item.name">
      <div class="item-name">{{item.name | add-dot}}</div>
      <div class="item-num">{{item.num | add-dot}}
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
      padding 0 5vw
      margin 4vw 0
      flex 1
      &:first-of-type
        border-right 0.5px solid rgba($base-color, .5)
      div.item-name
        line-height 2em
      div.item-num
        font-size 5.8vw
        font-weight 500
        span
          font-size 60%

    
 
</style>
