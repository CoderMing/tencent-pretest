<template>
  <div id="app">
    <Nav />
    <Banner :imgUrl="pageData.bannerImg" />
    <TitleSection :titData="pageData.titleSectionData" />
    <div class="section-container">
      <Progress value="50" max="100"/>
      <StaticInfo :infoData="pageData.infoOne" colorMode="dark"/>
      <StaticInfo :infoData="pageData.infoTwo" colorMode="light"/>
      <a class="footer-link" href="https://coderming.com/resume">获取更多爱心 ></a>
      <p class="content">{{pageData.content}}</p>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Nav from './components/Nav.vue'
import TitleSection from './components/TitleSection.vue'
import StaticInfo from './components/StaticInfo.vue'
import Progress from './components/Progress.vue'

import MookRequest from './mooks/index'

export default {
  name: 'app',

  components: {
    Banner,
    Nav,
    TitleSection,
    Progress,
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
    background-color #292d36

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    overflow-x hidden
    .section-container
      background-color $bg-color
      width 94vw
      margin 0 auto
    .footer-link
      color $base-h1-color
      font-size 4vw
      display block
      text-align center
      padding 4vw 0
    .content
      color rgba($base-h1-color, .7)
      padding 2vw
      font-size 4vw

</style>
