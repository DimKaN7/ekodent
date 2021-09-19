<template>
  <div class="questions-tab__container">
    <div class="questions-tab-title">
      {{questionsTabStrings.title}}
    </div>
    <div class="questions-tab-line">
    </div>
    <div class="questions-tab-block" v-for="(t,index) in questionsTabStrings.questionsBlock" :key="index">
      <div class="questions-tab-block__question" v-b-toggle="'accordion-' + index">{{t.question}}</div>
        <b-collapse class="questions-tab-block__answer" :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel">
          <div class="questions-tab-block__answer-text"></div>
            {{t.answer}}
        </b-collapse>
    </div>
  </div>
</template>

<script>
import {questionsTabStrings} from '../../../tools/strings';


export default {
  name: "Questions",
  data() {
    return {
      questionsTabStrings,
    }
  }
}
</script>

<style scoped>
  .questions-tab__container{
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    padding: 140px 10% 0 10%;
  }

  .questions-tab-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    padding-top: 30px;
  }

  .questions-tab-line{
    background-color: #E64243;
    width: 73px;
    height: 2px;
    margin-bottom: 42px;
  }

  .questions-tab-block {
    height: 100%;
  }
  .questions-tab-block__question {
     font-family: Roboto;
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
     line-height: 21px;
     /* identical to box height */

     letter-spacing: -0.02em;
     text-decoration-line: underline;
    padding-bottom: 17px;
   }

  .questions-tab-block__answer{
    margin-top: 5px;
    padding: 46px 5px 46px 5px;
    background: rgba(77, 142, 77, 0.2);
    border-radius: 20px;
  }
  .questions-tab-block__answer-text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
  }

</style>