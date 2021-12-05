<template>
  <div class="app">
    <Header :scrolled='scrollIndex >= 227 && !isMobile'/>
    <router-view></router-view>
    <!-- <Footer />
    <ScrollUp v-if="scrollIndex >= 227" /> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import ScrollUp from '../ScrollUp/ScrollUp';


export default {
  name: 'App',
  components: {
    Header, 
    // Footer, ScrollUp
  },
  computed: {
    ...mapState([
      'windowWidth'
    ]),
    ...mapGetters([
      'isMobile'
    ]),
  },
  methods: {
    ...mapActions([
      'setWindowWidth'
    ]),
    onScroll() {
      this.scrollIndex = window.scrollY;
    },
    onResize() {
      this.setWindowWidth(window.innerWidth)
    }
  },
  created() {
    this.onResize()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },
  data() {
    return {
      scrollIndex: 0,
    }
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: local('Roboto'), url(../../assets/fonts/Roboto-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: local('Roboto'), url(../../assets/fonts/Roboto-Medium.ttf) format('truetype');
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    // line-height: 1vmin;
  }
  .app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }
</style>
