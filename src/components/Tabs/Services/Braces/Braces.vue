<template>
  <div>
    <div class="Braces-tab-title">
      {{BracesTabStrings.title}}
    </div>
    <div class="Braces-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-6">
        <div class="Braces-tab-block__subtitle">
          {{BracesTabStrings.subTitle[0]}}
        </div>
        <span v-html="BracesTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${Braces})`}">
        </div>
      </div>
    </div>
    <div class="Braces-tab-block__subtitle">
      {{BracesTabStrings.subTitle[1]}}
    </div>
    <div class="row therapy-text">
      <span v-html="BracesTabStrings.text[1]"></span>
    </div>
    <div class="Braces-tab-block__infoBanner">
      <div class="Braces-tab-block__subtitle">
        {{BracesTabStrings.subTitle[2]}}
      </div>
      <div class="row Braces-text">
        <span v-html="BracesTabStrings.text[2]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {BracesTabStrings} from "../../../../tools/strings";
import Braces from '../../../../assets/Tabs/Services/Braces/Braces.png';

export default {
  name: "Braces",
  data() {
    return {
      BracesTabStrings,
      Braces
    }
  }
}
</script>

<style scoped>

.Braces-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Braces-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Braces-tab-line{
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

.background_image{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
}

.therapy-text{
  margin-bottom: 50px;
}

.Braces-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>