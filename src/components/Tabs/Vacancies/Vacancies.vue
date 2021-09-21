<template>
  <div class="Vacancies-tab-block">
    <div class="Vacancies-tab-title">
      {{ VacanciesTabStrings.title }}
    </div>
    <div class="Vacancies-tab-line">
    </div>
    <div class="Vacancies-tab-block-text">
      <div class="Vacancies-tab-sub-title">
        {{VacanciesTabStrings.subTitle}}
      </div>
      <div class="Vacancies-tab-text" v-html="VacanciesTabStrings.text[0]">
      </div>
      <div class="Vacancies-tab-text" v-html="VacanciesTabStrings.text[1]">
      </div>
    </div>
  </div>
</template>

<script>
import {VacanciesTabStrings} from "../../../tools/strings";

export default {
  name: "Vacancies",
  data() {
    return {
      VacanciesTabStrings,
    }
  }
}
</script>

<style scoped>
.Vacancies-tab-block {
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


.Vacancies-tab-title {
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

.Vacancies-tab-line {
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

.Vacancies-tab-block-text{
  margin-top: 50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.Vacancies-tab-text{
  margin-top: 25px;
  margin-bottom: 25px;
}

</style>