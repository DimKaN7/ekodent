<template>
  <div>
    <div class="therapy-tab-title">
      {{therapyTabStrings.title[0]}}
    </div>
    <div class="therapy-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-7">
        <span v-html="therapyTabStrings.text[0]"></span>
      </div>
      <div class="col-5">
        <div class="background_image" :style="{'background-image': `url(${Therapy})`}">
        </div>
      </div>
    </div>
    <div class="therapy-info-banner">
      <span class="therapy-info-banner-text" v-html="therapyTabStrings.text[1]"></span>
    </div>
    <div class="therapy-tab-title">
      {{therapyTabStrings.title[1]}}
    </div>
    <div class="therapy-tab-line">
    </div>
    <div class="row therapy-text">
      <div class="col-7">
        <span v-html="therapyTabStrings.text[2]"></span>
      </div>
      <div class="col-5">
        <div class="background_image" :style="{'background-image': `url(${Caries})`}">
        </div>
      </div>
    </div>
    <div class="therapy-info-banner">
      <span class="therapy-info-banner-text" v-html="therapyTabStrings.text[3]"></span>
    </div>
    <div class="therapy-tab-block">
      <div class="row therapy-tab-block__titles">
        <div class="therapy-tab-block__title col-4" v-b-toggle="'accordion-symptoms'">{{therapyTabStrings.cols[0].title}}</div>
        <div class="therapy-tab-block__title col-4" v-b-toggle="'accordion-reasons'">{{therapyTabStrings.cols[1].title}}</div>
        <div class="therapy-tab-block__title col-4" v-b-toggle="'accordion-stage'">{{therapyTabStrings.cols[2].title}}</div>
      </div>
      <b-collapse class="questions-tab-block__answer" :id="'accordion-symptoms'" visible accordion="my-accordion" role="tabpanel">
        <div class="questions-tab-block__answer-text"></div>
        <div class="therapy-tab-block__subtitle">
          {{therapyTabStrings.cols[0].subTitle[0]}}
        </div>
        <div class="row therapy-tab-block__row">
          <div class="therapy-tab-block__text col-6">
            <span v-html="therapyTabStrings.cols[0].text[0]"></span>
          </div>
          <div class="therapy-tab-block__infoBanner col-6">
            <span v-html="therapyTabStrings.cols[0].infoBanner"></span>
          </div>
        </div>
        <div class="therapy-tab-block__row">
          <div class="therapy-tab-block__text">
            <span v-html="therapyTabStrings.cols[0].text[1]"></span>
          </div>
        </div>
        <div class="therapy-tab-block__subtitle">
          {{therapyTabStrings.cols[0].subTitle[1]}}
        </div>
        <div class="row therapy-text">
          <div class="col-7">
            <span v-html="therapyTabStrings.cols[0].text[2]"></span>
          </div>
          <div class="col-5">
            <div class="background_image" :style="{'background-image': `url(${Symptoms})`}">
            </div>
          </div>
        </div>
      </b-collapse>
      <b-collapse class="questions-tab-block__answer" :id="'accordion-reasons'" visible accordion="my-accordion" role="tabpanel">
        <div class="questions-tab-block__answer-text"></div>
        <div class="therapy-tab-block__subtitle">
          {{therapyTabStrings.cols[1].subTitle}}
        </div>
        <div class="row therapy-text">
          <span v-html="therapyTabStrings.cols[1].text"></span>
        </div>
      </b-collapse>
      <b-collapse class="questions-tab-block__answer" :id="'accordion-stage'" visible accordion="my-accordion" role="tabpanel">
        <div class="questions-tab-block__answer-text"></div>
        <div class="therapy-tab-block__subtitle">
          {{therapyTabStrings.cols[2].subTitle}}
        </div>
        <div class="row therapy-text">
          <span v-html="therapyTabStrings.cols[2].text"></span>
        </div>
      </b-collapse>
    </div>


  </div>
</template>

<script>
import {therapyTabStrings} from "../../../../tools/strings";
import Therapy from '../../../../assets/Tabs/Services/Therapy/thepapy.png';
import Caries from '../../../../assets/Tabs/Services/Therapy/Caries.png'
import Symptoms from '../../../../assets/Tabs/Services/Therapy/Symptoms.png'

export default {
  name: "Therapy",
  data() {
    return {
      therapyTabStrings,
      Therapy,
      Caries,
      Symptoms
    }
  }
}
</script>

<style scoped>

.therapy-tab-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.therapy-tab-line{
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
}

.therapy-text{
  margin-bottom: 50px;
}

.therapy-info-banner{
  background: rgba(77, 142, 77, 0.2);
  border-radius: 10px;
  padding: 15px 5px 15px 5px;
  margin-bottom: 70px;
}

.therapy-info-banner-text{
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
}

.therapy-tab-block .not-collapsed{
  text-decoration: underline;
  text-decoration-color: #E64243;
  text-decoration-thickness: 3px;
}

.therapy-tab-block__titles{
  margin-bottom: 50px;
}

.therapy-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.therapy-tab-block__infoBanner{
  background: rgba(230, 66, 67, 0.2);
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  height: 100%;
}

.therapy-tab-block__row{
  margin-bottom: 29px;
}
</style>