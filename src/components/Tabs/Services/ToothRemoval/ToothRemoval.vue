<template>
  <div>
    <div class="ToothRemoval-tab-title">
      {{ToothRemovalTabStrings.title}}
    </div>
    <div class="ToothRemoval-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-6">
        <span v-html="ToothRemovalTabStrings.text[0]"></span>
      </div>
      <div class="col-6">
        <div class="background_image" :style="{'background-image': `url(${ToothRemoval})`}">
        </div>
      </div>
    </div>
    <div class="ToothRemoval-tab-block__subtitle">
      {{ToothRemovalTabStrings.subTitle[0]}}
    </div>
    <div class="row therapy-text">
      <span v-html="ToothRemovalTabStrings.text[1]"></span>
    </div>
    <div class="ToothRemoval-tab-block__infoBanner">
      <div class="ToothRemoval-tab-block__subtitle">
        {{ToothRemovalTabStrings.subTitle[1]}}
      </div>
      <div class="row ToothRemoval-text">
        <span v-html="ToothRemovalTabStrings.text[2]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {ToothRemovalTabStrings} from "../../../../tools/strings";
import ToothRemoval from '../../../../assets/Tabs/Services/ToothRemoval/ToothRemoval.png';

export default {
  name: "ToothRemoval",
  data() {
    return {
      ToothRemovalTabStrings,
      ToothRemoval
    }
  }
}
</script>

<style scoped>
  .ToothRemoval-tab-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .ToothRemoval-tab-block__subtitle{
    font-family: Roboto;
    font-style: italic;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 29px;
  }

  .ToothRemoval-tab-line{
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

  .ToothRemoval-tab-block__infoBanner{
    background: rgba(77, 142, 77, 0.2);
    border-radius: 10px;
    padding: 15px 15px 15px 15px;
    height: 100%;
    margin-bottom: 20px;
  }
</style>