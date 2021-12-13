<template>
  <div>
    <div class="ChildrenDentistry-tab-title">
      {{ChildrenDentistryTabStrings.title}}
    </div>
    <div class="ChildrenDentistry-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-sm-6 col-12">
        <span v-html="ChildrenDentistryTabStrings.text[0]"></span>
      </div>
      <div class="col-sm-6 col-12">
        <div class="background_image" :style="{'background-image': `url(${ChildrenDentistry})`}">
        </div>
      </div>
    </div>
    <div class="ChildrenDentistry-tab-block__infoBanner">
      <div class="row therapy-text">
        <span v-html="ChildrenDentistryTabStrings.text[1]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {ChildrenDentistryTabStrings} from "../../../../tools/strings";
import ChildrenDentistry from '../../../../assets/Tabs/Services/ChildrenDentistry/ChildrenDentistry.png';

export default {
  name: "ChildrenDentistry",
  data() {
    return {
      ChildrenDentistryTabStrings,
      ChildrenDentistry
    }
  }
}
</script>

<style lang="scss">
.ChildrenDentistry-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.ChildrenDentistry-tab-line{
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
  @media (max-width:540px) {
    height: 60vw;
    margin-top: 20px;
  }
}

.therapy-text{
}

.ChildrenDentistry-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
  margin-top: 50px;

}
</style>