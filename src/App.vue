<template>
  <div id="app">
    <Nav />
    <Banner :imgUrl="pageData.bannerImg" />
    <TitleSection :titData="pageData.titleSectionData" />
    <StaticInfo :infoData="pageData.infoOne" colorMode="dark"/>
    <StaticInfo :infoData="pageData.infoTwo" colorMode="light"/>
    <a class="footer-link">获取更多爱心 ></a>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Nav from './components/Nav.vue'
import TitleSection from './components/TitleSection.vue'
import StaticInfo from './components/StaticInfo.vue'

import MookRequest from './mooks/index'

export default {
  name: 'app',

  components: {
    Banner,
    Nav,
    TitleSection,
    StaticInfo
  },

  data() {
    return {
      pageData: {}
    }
  },

  async beforeCreate() {
    let res = JSON.parse(await MookRequest())
    this.pageData = res
  }
}
</script>

<style lang="stylus">
  @import './config/config.styl'

  *
    margin 0
    padding 0
  body
    background-color $bg-color

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    overflow-x hidden
  .footer-link
    color $base-h1-color
    font-size 4vw
    display block
    text-align center
    margin 4vw 0

</style>
