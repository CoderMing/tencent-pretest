<template>
  <div class="progress-line">
    <div class="prog-out">
      <div 
        class="prog-in" 
        :style="`transform: translateX(-${100 - value / max * 100}%)`">
      </div>
    </div>
    <div class="prog-p">{{info}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: [ 'value', 'max', 'info' ],
    components: {

    }
  }
</script>

<style scoped lang="stylus">
  @import '../config/config.styl'
  .progress-line
    display flex
    padding 2vw 1vw 0
    box-sizing border-box
    .prog-out
      flex 1
      height 2vw
      margin 3vw
      margin-left 0
      background #23262d 
      border-radius 1vw
      overflow hidden
      .prog-in
        size 100%
        background-color #ee503f
        transition transform .3s
        border-radius 1vw
        transform translateX(-100%)
    .prog-p
      line-height 8vw
      padding-left 1vw
      color $base-color
      font-size 3.4vw

 
</style>
