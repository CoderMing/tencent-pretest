<template>
  <div id="app">
    <Nav />
    <Banner />
    <TitleSection :titData="pageData.titleSectionData"/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Nav from './components/Nav.vue'
import TitleSection from './components/TitleSection.vue'

import MookRequest from './mooks/index'

export default {
  name: 'app',

  components: {
    Banner,
    Nav,
    TitleSection
  },

  data() {
    return {
      pageData: {}
    }
  },

  async beforeCreate() {
    await MookRequest().then(data => {
      this.pageData = data
    })
    console.log(this)
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
