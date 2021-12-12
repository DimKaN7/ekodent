<template>
<div>
  <Preview></Preview>
  <Services></Services>
  <Stocks></Stocks>
  <Recommend></Recommend>
  <Doctors></Doctors>
  <!-- <Director></Director> -->
  <Reviews></Reviews>
</div>
</template>

<script>
import Preview from '../../Preview/Preview';
import Services from '../../Services/Services';
import Stocks from '../../Stocks/Stocks';
import Recommend from "../../Recommend/Recommend";
import Doctors from '../../Doctors/Doctors';
// import Director from '../../Director/Director';
import Reviews from '../../Reviews/Reviews';

export default {
  name: "Main",
  components: {
    Preview,
    Reviews, 
    Doctors, 
    Recommend, 
    Stocks, 
    Services,
  },
  comments:{
    Preview, 
    Services,
    Stocks,  
    Doctors, 
    Recommend, 
    Reviews
  }
}
</script>

<style scoped>

</style>