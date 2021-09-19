<template>
  <div>
    <div>
      <div class="Periodontitis-tab-title">
        {{PeriodontitisTabStrings.title}}
      </div>
      <div class="Periodontitis-tab-line">
      </div>
      <div class="row Periodontitis-text">
        <span v-html="PeriodontitisTabStrings.text[0]"></span>
      </div>
      <div class="row Periodontitis-text">
        <div class="col-6">
          <div class="Periodontitis-tab-block__subtitle">
            {{PeriodontitisTabStrings.subTitle[0]}}
          </div>
          <span v-html="PeriodontitisTabStrings.text[1]"></span>
        </div>
        <div class="col-6">
          <div class="background_image" :style="{'background-image': `url(${Periodontitis})`}">
          </div>
        </div>
      </div>
      <div class="row Periodontitis-text">
        <span v-html="PeriodontitisTabStrings.text[2]"></span>
      </div>
      <div class="Periodontitis-info-banner">
        <span class="Periodontitis-info-banner-text" v-html="PeriodontitisTabStrings.text[3]"></span>
      </div>
      <div class="Periodontitis-tab-block__infoBanner">
        <div class="Periodontitis-tab-block__subtitle">
          {{PeriodontitisTabStrings.subTitle[1]}}
        </div>
        <div class="row Periodontitis-text">
          <span v-html="PeriodontitisTabStrings.text[4]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PeriodontitisTabStrings} from "../../../../tools/strings";
import Periodontitis from "../../../../assets/Tabs/Services/Periodontitis/Periodontitis.png";


export default {
  name: "Periodontitis",
  data() {
    return {
      PeriodontitisTabStrings,
      Periodontitis,
    }
  }
}
</script>

<style scoped>

.Periodontitis-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Periodontitis-tab-line{
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

.Periodontitis-text{
  margin-bottom: 50px;
}


.Periodontitis-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Periodontitis-info-banner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 5px 15px 5px;
  margin-bottom: 70px;
}

.Periodontitis-info-banner-text{
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
}

.Periodontitis-tab-block__infoBanner{
  background: rgba(230, 66, 67, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>