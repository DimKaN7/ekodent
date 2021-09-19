<template>
  <div>
    <div class="SurgicalMethods-tab-title">
      {{SurgicalMethodsTabStrings.title}}
    </div>
    <div class="SurgicalMethods-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-6">
        <div class="SurgicalMethods-tab-block__subtitle">
          {{SurgicalMethodsTabStrings.subTitle[0]}}
        </div>
        <span v-html="SurgicalMethodsTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${SurgicalMethods})`}">
        </div>
      </div>
    </div>
    <div class="SurgicalMethods-tab-block__infoBanner">
      <div class="row SurgicalMethods-text">
        <span v-html="SurgicalMethodsTabStrings.text[1]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {SurgicalMethodsTabStrings} from "../../../../tools/strings";
import SurgicalMethods from '../../../../assets/Tabs/Services/SurgicalMethods/SurgicalMethods.png';

export default {
  name: "SurgicalMethods",
  data() {
    return {
      SurgicalMethodsTabStrings,
      SurgicalMethods
    }
  }
}
</script>

<style scoped>

.SurgicalMethods-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.SurgicalMethods-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.SurgicalMethods-tab-line{
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

.SurgicalMethods-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>