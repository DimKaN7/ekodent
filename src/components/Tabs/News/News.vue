<template>
  <div class="news-tab-block">
    <div class="News-tab-title">
      {{ NewsTabStrings.title }}
    </div>
    <div class="News-tab-line">
    </div>
    aaa
  </div>
</template>

<script>
import {NewsTabStrings} from "../../../tools/strings";

export default {
  name: "News",
  data() {
    return {
      NewsTabStrings,
    }
  }
}
</script>

<style scoped>
.news-tab-block {
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


.News-tab-title {
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

.News-tab-line {
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

</style>