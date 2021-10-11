<template>
  <div>
    <div class="Prosthetics-tab-title">
      {{ProstheticsTabStrings.title}}
    </div>
    <div class="Prosthetics-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-4">
        <span v-html="ProstheticsTabStrings.text[0]"></span>
      </div>
      <div class="col-8">
        <div class="background_image" :style="{'background-image': `url(${Prosthetics})`}">
        </div>
      </div>
    </div>
    <div class="Prosthetics-tab-block__subtitle">
      {{ProstheticsTabStrings.subTitle[0]}}
    </div>
    <div class="row therapy-text">
      <span v-html="ProstheticsTabStrings.text[1]"></span>
    </div>
    <div class="Prosthetics-tab-block__infoBanner">
      <div class="row Prosthetics-text">
        <span v-html="ProstheticsTabStrings.text[2]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {ProstheticsTabStrings} from "../../../../tools/strings";
import Prosthetics from '../../../../assets/Tabs/Services/Prosthetics/Prosthetics.png';

export default {
  name: "Prosthetics",
  data() {
    return {
      ProstheticsTabStrings,
      Prosthetics
    }
  }
}
</script>

<style scoped>
.Prosthetics-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Prosthetics-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Prosthetics-tab-line{
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

.Prosthetics-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>