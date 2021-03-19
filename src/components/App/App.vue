<template>
  <div class="app" ref="app">
    <Header />
    <Services />
    <About />
    <Stocks />
    <Doctors />
    <Reviews />
    <Footer />
    <ScrollUp v-if="scrollIndex >= 227" />
  </div>
</template>

<script>
import Header from '../Header/Header';
import Services from '../Services/Services';
import About from '../About/About';
import Stocks from '../Stocks/Stocks';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import ScrollUp from '../ScrollUp/ScrollUp';

export default {
  name: 'App',
  components: {
    Header, Services, About, Stocks, Doctors, Reviews, Footer, ScrollUp
  },
  methods: {
    onScroll() {
      this.scrollIndex = window.scrollY;
      console.log(this.scrollIndex);
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