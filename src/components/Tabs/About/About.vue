<template>
  <div>
    <div class="about-tab-container">

      <div class="about-tab-title">
        {{ aboutTabStrings.title }}

        <div class="about-tab-line">

        </div>
      </div>
      <div class="about-tab-text" v-for="(t,index) in aboutTabStrings.text" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="card-container" :style="{'background-image': `url(${Background})`}">
      <div class="about-tab__gradient"></div>
      <div class="about-tab">
        <div class="about-tab__cards">
          <AboutCard v-for="(c, index) in aboutTabStrings.cards" :key="index" :number="index + 1"
                     :content="c"/>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import {aboutTabStrings} from '../../../tools/strings';
import AboutCard from "../../About/AboutCard";
import Background from '../../../assets/Tabs/About/Background.png';

export default {
  name: 'About',
  components: {
    AboutCard,
  },
  data() {
    return {
      aboutTabStrings,
      Background
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
  padding: 140px 10% 0 10%;

}

.about-tab-title {
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

.about-tab-text {

  width: 100%;
}

.about-tab-columns {
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

// TODO Перенезвать стили

.card-container .card-block__content {
  background: rgba(0, 0, 0, 0);
}

.card-container {
  padding: 0 5% 0 5%;
  widows: 100%;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .about-tab__gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #FFFFFF 46.93%, rgba(255, 255, 255, 0) 118.65%);
  }

  .about-tab {
    height: 100%;
    padding: 80px 0px 145px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    &__title {
      height: fit-content;
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 98.33px;

      > span:first-child {
        color: #E64243;
      }
    }

    &__cards {
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      row-gap: 40px;
    }
  }
}
.card-container .card-block{
  height: 100%;
}

</style>