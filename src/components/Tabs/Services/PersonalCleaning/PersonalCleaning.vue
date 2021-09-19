<template>
  <div>
    <div class="PersonalCleaning-tab-title">
      {{PersonalCleaningTabStrings.title}}
    </div>
    <div class="PersonalCleaning-tab-line">
    </div>
    <div class="row PersonalCleaning-text">
      <div class="col-6">
        <span v-html="PersonalCleaningTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${PersonalCleaning})`}">
        </div>
      </div>
    </div>
    <div class="PersonalCleaning-tab-block__subtitle">
      {{PersonalCleaningTabStrings.subTitle[0]}}
    </div>
    <div class="row PersonalCleaning-text">
      <span v-html="PersonalCleaningTabStrings.text[1]"></span>
    </div>
    <div class="PersonalCleaning-tab-block__subtitle">
      {{PersonalCleaningTabStrings.subTitle[1]}}
    </div>
    <div class="row PersonalCleaning-text">
      <span v-html="PersonalCleaningTabStrings.text[2]"></span>
    </div>
    <div class="PersonalCleaning-tab-block__subtitle">
      {{PersonalCleaningTabStrings.subTitle[2]}}
    </div>
    <div class="row PersonalCleaning-text">
      <span v-html="PersonalCleaningTabStrings.text[3]"></span>
    </div>
  </div>
</template>

<script>
import PersonalCleaning from "../../../../assets/Tabs/Services/PersonalCleaning/PersonalCleaning.png";
import {PersonalCleaningTabStrings} from "../../../../tools/strings";

export default {
  name: "PersonalCleaning",
  data() {
    return {
      PersonalCleaningTabStrings,
      PersonalCleaning,
    }
  }
}
</script>

<style scoped>

.PersonalCleaning-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.PersonalCleaning-tab-line{
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

.PersonalCleaning-text{
  margin-bottom: 50px;
}


.PersonalCleaning-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}
</style>