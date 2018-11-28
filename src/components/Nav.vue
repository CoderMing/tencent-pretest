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
    mounted() {
      ((offset, delayTime) => {
        let el = window.document.querySelector('.nav')
        let funcFlag = false
        let testReg = /^(.*?)( offset)+$/;
        const loopFunc = () => {
          let offsetY = window.pageYOffset
          if (offsetY > offset) {
            if (testReg.test(el.className)) return void 0
            else el.className += ' offset'
          }
          else {
            if (testReg.test(el.className)) el.className = el.className.replace(testReg, '$1')
            else return void 0
          }
        }
        window.addEventListener('scroll', e => {
          if (funcFlag) return false
          funcFlag = true
          loopFunc()
          setTimeout(() => funcFlag = false, delayTime)
        })
      })(300, 50)
    }
  }
</script>

<style scoped lang="stylus">
  @import '../config/config.styl'
  .nav
    size 100vw 12vw
    position fixed
    line-height 12vw
    z-index 10
    transition background .3s
    &.offset
      background $bg-color
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
