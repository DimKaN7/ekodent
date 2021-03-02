<template>
  <div class="app">
    <Header />
    <Preview />
    <Services />
    <About />
    <Stocks />
    <Recommend />
    <Doctors />
    <Director />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import Services from '../Services/Services';
import About from '../About/About';
import Stocks from '../Stocks/Stocks';
import Doctors from '../Doctors/Doctors';
import Recommend from '../Recommend/Recommend.vue';
import Director from '../Director/Director';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

export default {
  name: 'App',
  components: {
    Header, Preview, Services, About, Stocks, Doctors, Recommend, Director, Reviews, Footer
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
  }
</style>