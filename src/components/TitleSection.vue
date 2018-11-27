<template>
  <Header class="title-section">
    <h1>{{titData && titData.title}}</h1>
    <h3>{{titData && titData.smallTitle}}</h3>
    <Progress value="50" max="100"/>
  </Header>
</template>

<script>
import Progress from './Progress.vue'

  export default {
    data () {
      return {

      }
    },
    props: [
      'titData'
    ],
    components: {
      Progress
    }
  }
</script>

<style scoped lang="stylus">
  @import '../config/config.styl'
  .title-section
    size 100vw auto 
    box-sizing border-box
    background-color #292d36
    padding 5vw
    color #656b83
    font-size $base-font
    h1
      color #f0f4ff
      
 
</style>
