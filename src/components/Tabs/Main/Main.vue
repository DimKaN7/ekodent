<template>
<div>
  <Preview></Preview>
  <Services></Services>
  <!-- <Stocks></Stocks> -->
  <Recommend></Recommend>
  <!-- <Doctors></Doctors> -->
  <!-- <Director></Director> -->
  <!-- <Reviews></Reviews> -->
</div>
</template>

<script>
import Preview from '../../Preview/Preview';
import Services from '../../Services/Services';
// import Stocks from '../../Stocks/Stocks';
import Recommend from "../../Recommend/Recommend";
// import Doctors from '../../Doctors/Doctors';
// import Director from '../../Director/Director';
// import Reviews from '../../Reviews/Reviews';

export default {
  name: "Main",
  // components: {Reviews, Director, Doctors, Recommend, Stocks, About, Services, Preview},
  components: {
    // Reviews, Director, Doctors, Recommend, Stocks, 
    Services, 
    Preview,
    Recommend
  },
  comments:{
    // Preview, Services, About, Stocks, Doctors, Recommend, Director, Reviews
    Preview, 
    Services,
    Recommend
    //Stocks,  Doctors, Recommend, Director, Reviews
  }
}
</script>

<style scoped>

</style>