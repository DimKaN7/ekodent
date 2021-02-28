<template>
  <div class="about-container" :style="{'background-image': `url(${Background})`}">
    <div class="gradient"></div>
    <div class="about">
      <div class="about__title">
        <span v-for="(t, index) in aboutStrings.titles" :key="index">{{t}}</span>
      </div>
      <div class="about__cards">
        <AboutCard v-for="(c, index) in aboutStrings.cards" :key="index" :number="index + 1" 
          :content="c" />
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from './AboutCard';

import {aboutStrings} from '../../tools/strings';
import Background from '../../assets/About/Background.png';

export default {
  name: 'About',
  components: {
    AboutCard,
  },
  data() {
    return {
      aboutStrings,
      Background,
    }
  }
}
</script>

<style lang="scss">
.about-container {
  widows: 100%;
  height: 935px;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #FFFFFF 46.93%, rgba(255, 255, 255, 0) 118.65%);
  }

  .about {
    width: 1267px;
    height: 100%;
    padding: 80px 0px 145px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    &__title {
      width: 831px;
      height: fit-content;
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 98.33px;

      >span:first-child {
        color: $bgred;
      }
    }

    &__cards { 
      width: 1267px;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      row-gap: 40px;
    }
  }
}
</style>