<template>
  <div>
    <div class="about-tab-container">

      <div class="about-tab-title">
        {{ aboutTabStrings.title }}

        <div class="about-tab-line">

        </div>
      </div>
      <div class="about-tab-text" v-for="(t,index) in aboutTabStrings.text" :key="index">

        {{t}}
      </div>

    </div>
  </div>

</template>


<script>
// import Background from '../../../assets/Director/Background.png';
import {aboutTabStrings} from '../../../tools/strings';

export default {
  name: 'About',
  data () {
    return {
      aboutTabStrings
    }
  }
}

</script>


<style lang="scss">
.about-tab-container {
  width: 100%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  padding: 0 10% 0 10%;

}
.about-tab-title{
  position: relative;
  justify-content: left;
  width: 132px;
  height: 28px;
  margin-bottom: 20px;
  margin-top: 30px;

  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  color: #000000;

}
.about-tab-line {

  background-color: #E64243;
  width: 73px;
  height: 2px;

}
.about-tab-text{

  width: 100%;
  margin-bottom: 30px;
}

.about-tab-columns{
}

.about__cards {
  margin-top: 95px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 40px;
}


</style>