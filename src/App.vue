<template>
  <div id="app">
    <Nav />
    <Banner />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Banner,
    Nav
  }
}
</script>

<style lang="stylus">

  *
    margin 0
    padding 0
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    overflow-x hidden

</style>
