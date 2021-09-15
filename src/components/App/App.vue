<template>
  <div class="app">
    <Header :scrolled='scrollIndex >= 227'/>
    <Preview></Preview>
    <Services />
    <About />
    <Stocks />
    <Recommend></Recommend>
    <Doctors />
    <Director></Director>
    <Reviews />
    <Footer />
    <ScrollUp v-if="scrollIndex >= 227" />
  </div>
</template>

<script>
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import Services from '../Services/Services';
import About from '../About/About';
import Stocks from '../Stocks/Stocks';
import Doctors from '../Doctors/Doctors';
import Director from '../Director/Director';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import ScrollUp from '../ScrollUp/ScrollUp';
import Recommend from "../Recommend/Recommend";

export default {
  name: 'App',
  components: {
    Director,
    Recommend,
    Preview,
    Header, Services, About, Stocks, Doctors, Reviews, Footer, ScrollUp
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
