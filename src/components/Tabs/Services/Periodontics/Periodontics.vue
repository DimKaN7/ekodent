<template>
  <div>
    <div>
      <div class="Periodontics-tab-title">
        {{PeriodonticsTabStrings.title}}
      </div>
      <div class="Periodontics-tab-line">
      </div>
      <div class="row Periodontics-text">
        <span v-html="PeriodonticsTabStrings.text[0]"></span>
      </div>
      <div class="row Periodontics-text">
        <div class="col-sm-6 col-12 ">
          <div class="Periodontics-tab-block__subtitle">
            <h5>{{PeriodonticsTabStrings.subTitle[0]}}</h5>
          </div>
          <span v-html="PeriodonticsTabStrings.text[1]"></span>
        </div>
        <div class="col-sm-6 col-12 ">
          <div class="background_image" :style="{'background-image': `url(${Periodontics})`}">
          </div>
        </div>
      </div>
      <div class="Periodontics-tab-block__infoBanner">
        <div class="row">
          <span v-html="PeriodonticsTabStrings.text[2]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PeriodonticsTabStrings} from "../../../../tools/strings";
import Periodontics from "../../../../assets/Tabs/Services/Periodontics/Periodontics.png";

export default {
  name: "Periodontics",
  data() {
    return {
      PeriodonticsTabStrings,
      Periodontics,
    }
  }
}
</script>

<style lang="scss">

.Periodontics-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Periodontics-tab-line{
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

.Periodontics-text{
  margin-bottom: 50px;
}

.Periodontics-tab-block__subtitle{
  font-family: Roboto;
  /*font-style: italic;*/
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}


.Periodontics-tab-block__infoBanner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
  margin-bottom: 20px;
}
</style>