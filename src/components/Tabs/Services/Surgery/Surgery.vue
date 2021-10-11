<template>
  <div>
    <div class="Surgery-tab-title">
      {{SurgeryTabStrings.title}}
    </div>
    <div class="Surgery-tab-line">
    </div>
    <div class="row therapy-text therapy-text-block">
      <div class="col-6  d-flex align-items-center">
        <span v-html="SurgeryTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${Surgery})`}">
        </div>
      </div>
    </div>
    <div class="Surgery-tab-block__subtitle">
      <h5>{{SurgeryTabStrings.subTitle[0]}}</h5>
    </div>
    <div class="row therapy-text">
      <span v-html="SurgeryTabStrings.text[1]"></span>
    </div>
    <div class="Surgery-tab-block__infoBanner">
      <div class="row Surgery-text">
        <span v-html="SurgeryTabStrings.text[2]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {SurgeryTabStrings} from "../../../../tools/strings";
import Surgery from '../../../../assets/Tabs/Services/Surgery/Surgery.png';

export default {
  name: "Surgery",
  data() {
    return {
      SurgeryTabStrings,
      Surgery
    }
  }
}
</script>

<style scoped>
.Surgery-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Surgery-tab-block__subtitle{
  font-family: Roboto;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Surgery-tab-line{
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

.therapy-text-block{
  height: 300px;
}

.Surgery-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>