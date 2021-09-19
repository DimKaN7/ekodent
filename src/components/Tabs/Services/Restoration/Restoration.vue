<template>
  <div>
    <div class="restoration-tab-title">
      {{restorationTabStrings.title}}
    </div>
    <div class="restoration-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-6">
        <span v-html="restorationTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${Restoration})`}">
        </div>
      </div>
    </div>
    <div class="row therapy-text">
      <span v-html="restorationTabStrings.text[1]"></span>
    </div>
  </div>
</template>

<script>
import {restorationTabStrings} from "../../../../tools/strings";
import Restoration from '../../../../assets/Tabs/Services/Restoration/Restoration.png';

export default {
  name: "Restoration",
  data() {
    return {
      restorationTabStrings,
      Restoration
    }
  }
}
</script>

<style scoped>
.restoration-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.restoration-tab-line{
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
</style>