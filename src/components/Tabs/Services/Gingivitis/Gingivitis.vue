<template>
  <div>
    <div>
      <div class="Gingivitis-tab-title">
        {{GingivitisTabStrings.title}}
      </div>
      <div class="Gingivitis-tab-line">
      </div>
      <div class="row Gingivitis-text">
        <span v-html="GingivitisTabStrings.text[0]"></span>
      </div>
      <div class="row Gingivitis-text">
        <div class="col-6">
          <div class="Gingivitis-tab-block__subtitle">
            {{GingivitisTabStrings.subTitle[0]}}
          </div>
          <span v-html="GingivitisTabStrings.text[1]"></span>
        </div>
        <div class="col-6">
          <div class="background_image" :style="{'background-image': `url(${Gingivitis})`}">
          </div>
        </div>
      </div>
      <div class="row Gingivitis-text">
        <span v-html="GingivitisTabStrings.text[2]"></span>
      </div>
      <div class="Gingivitis-info-banner">
        <span class="Gingivitis-info-banner-text" v-html="GingivitisTabStrings.text[3]"></span>
      </div>
      <div class="Gingivitis-tab-block__infoBanner">
        <div class="Gingivitis-tab-block__subtitle">
          {{GingivitisTabStrings.subTitle[1]}}
        </div>
        <div class="row Gingivitis-text">
          <span v-html="GingivitisTabStrings.text[4]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GingivitisTabStrings} from "../../../../tools/strings";
import Gingivitis from "../../../../assets/Tabs/Services/Gingivitis/Gingivitis.png";

export default {
  name: "Gingivitis",
  data() {
    return {
      GingivitisTabStrings,
      Gingivitis,
    }
  }
}
</script>

<style scoped>

.Gingivitis-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Gingivitis-tab-line{
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

.Gingivitis-text{
  margin-bottom: 50px;
}


.Gingivitis-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Gingivitis-info-banner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 5px 15px 5px;
  margin-bottom: 70px;
}

.Gingivitis-info-banner-text{
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
}

.Gingivitis-tab-block__infoBanner{
  background: rgba(230, 66, 67, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>