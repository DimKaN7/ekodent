<template>
  <div>
    <div>
      <div class="DentalImplantation-tab-title">
        {{DentalImplantationTabStrings.title}}
      </div>
      <div class="DentalImplantation-tab-line">
      </div>
      <div class="row DentalImplantation-text">
        <span v-html="DentalImplantationTabStrings.text[0]"></span>
      </div>
      <div class="row DentalImplantation-text">
        <div class="col-6">
          <div class="DentalImplantation-tab-block__subtitle">
            {{DentalImplantationTabStrings.subTitle[0]}}
          </div>
          <span v-html="DentalImplantationTabStrings.text[1]"></span>
        </div>
        <div class="col-6">
          <div class="background_image" :style="{'background-image': `url(${DentalImplantation})`}">
          </div>
        </div>
      </div>
      <div class="row DentalImplantation-text">
        <span v-html="DentalImplantationTabStrings.text[2]"></span>
      </div>
      <div class="DentalImplantation-info-banner">
        <span class="DentalImplantation-info-banner-text" v-html="DentalImplantationTabStrings.text[3]"></span>
      </div>
      <div class="DentalImplantation-tab-block__subtitle">
        {{DentalImplantationTabStrings.subTitle[1]}}
      </div>
      <div class="row DentalImplantation-text">
        <span v-html="DentalImplantationTabStrings.text[4]"></span>
      </div>
      <div class="DentalImplantation-tab-block__infoBanner">
        <div class="DentalImplantation-tab-block__subtitle">
          {{DentalImplantationTabStrings.subTitle[2]}}
        </div>
        <div class="row DentalImplantation-text">
          <span v-html="DentalImplantationTabStrings.text[5]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DentalImplantationTabStrings} from "../../../../tools/strings";
import DentalImplantation from "../../../../assets/Tabs/Services/DentalImplantation/DentalImplantation.jpeg";

export default {
  name: "DentalImplantation",
  data() {
    return {
      DentalImplantationTabStrings,
      DentalImplantation,
    }
  }
}
</script>

<style scoped>

.DentalImplantation-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.DentalImplantation-tab-line{
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

.DentalImplantation-text{
  margin-bottom: 50px;
}


.DentalImplantation-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.DentalImplantation-info-banner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 5px 15px 5px;
  margin-bottom: 70px;
}

.DentalImplantation-info-banner-text{
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
}

.DentalImplantation-tab-block__infoBanner{
  background: rgba(230, 66, 67, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>