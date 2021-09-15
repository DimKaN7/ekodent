<template>
  <div class="app">
    <Header :scrolled='scrollIndex >= 227'/>
    <router-view></router-view>
    <Footer />
    <ScrollUp v-if="scrollIndex >= 227" />
  </div>
</template>

<script>
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollUp from '../ScrollUp/ScrollUp';

export default {
  name: 'App',
  components: {
    Header, Footer
  },
  methods: {
    onScroll() {
      this.scrollIndex = window.scrollY;
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
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
