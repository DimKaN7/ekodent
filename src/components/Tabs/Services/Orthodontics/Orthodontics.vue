<template>
  <div>
    <div class="Orthodontics-tab-title">
      {{OrthodonticsTabStrings.title}}
    </div>
    <div class="Orthodontics-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-sm-4 col-12">
        <span v-html="OrthodonticsTabStrings.text[0]"></span>
      </div>
      <div class="col-sm-8 col-12">
        <div class="background_image" :style="{'background-image': `url(${Orthodontics})`}">
        </div>
      </div>
    </div>
    <div class="Orthodontics-tab-block__subtitle">
      <h5>{{OrthodonticsTabStrings.subTitle[0]}}</h5>
    </div>
    <div class="row therapy-text">
      <span v-html="OrthodonticsTabStrings.text[1]"></span>
    </div>
    <div class="Orthodontics-tab-block__infoBanner">
      <div class="row Orthodontics-text">
        <span v-html="OrthodonticsTabStrings.text[2]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {OrthodonticsTabStrings} from "../../../../tools/strings";
import Orthodontics from '../../../../assets/Tabs/Services/Orthodontics/Orthodontics.png';

export default {
  name: "Orthodontics",
  data() {
    return {
      OrthodonticsTabStrings,
      Orthodontics
    }
  }
}
</script>

<style lang="scss">

.Orthodontics-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Orthodontics-tab-block__subtitle{
  font-family: Roboto;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Orthodontics-tab-line{
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
  @media (max-width:540px) {
    height: 60vw;
    margin-top: 20px;
  }
}

.therapy-text{
  margin-bottom: 50px;
}

.Orthodontics-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>