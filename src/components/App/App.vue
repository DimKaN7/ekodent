<template>
  <div class="app">
    <Header />
  </div>
</template>

<script>
  import Header from '../Header/Header';

  export default {
    name: 'App',
    components: {
      Header,
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