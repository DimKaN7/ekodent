<template>
  <div class="Feedback-tab-block">
    <div class="Feedback-tab-title">
      {{ FeedbackTabStrings.title }}
    </div>
    <div class="Feedback-tab-line">
    </div>
    aaa
  </div>
</template>

<script>
import {FeedbackTabStrings} from "../../../tools/strings";

export default {
  name: "Feedback",
  data() {
    return {
      FeedbackTabStrings,
    }
  }
}
</script>

<style scoped>
.Feedback-tab-block {
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  padding: 140px 10% 0 10%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 2;
}


.Feedback-tab-title {
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  z-index: 2;
}

.Feedback-tab-line {
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

</style>