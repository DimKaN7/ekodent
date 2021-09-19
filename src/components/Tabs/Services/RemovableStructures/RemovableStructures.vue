<template>
  <div>
    <div class="RemovableStructures-tab-title">
      {{RemovableStructuresTabStrings.title}}
    </div>
    <div class="RemovableStructures-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-6">
        <div class="RemovableStructures-tab-block__subtitle">
          {{RemovableStructuresTabStrings.subTitle[0]}}
        </div>
        <span v-html="RemovableStructuresTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${RemovableStructures})`}">
        </div>
      </div>
    </div>
    <div class="RemovableStructures-tab-block__subtitle">
      {{RemovableStructuresTabStrings.subTitle[1]}}
    </div>
    <div class="row therapy-text">
      <span v-html="RemovableStructuresTabStrings.text[1]"></span>
    </div>
    <div class="RemovableStructures-tab-block__infoBanner">
      <div class="row RemovableStructures-text">
        <span v-html="RemovableStructuresTabStrings.text[2]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {RemovableStructuresTabStrings} from "../../../../tools/strings";
import RemovableStructures from '../../../../assets/Tabs/Services/RemovableStructures/RemovableStructures.png';

export default {
  name: "RemovableStructures",
  data() {
    return {
      RemovableStructuresTabStrings,
      RemovableStructures
    }
  }
}
</script>

<style scoped>

.RemovableStructures-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.RemovableStructures-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.RemovableStructures-tab-line{
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

.RemovableStructures-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>