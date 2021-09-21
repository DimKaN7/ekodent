<template>
  <div>
    <div class="Doctors-tab-block">
<!--      <div class="Doctors-tab-title">-->
<!--        {{ DoctorsTabStrings.title }}-->
<!--      </div>-->
<!--      <div class="Doctors-tab-line">-->
<!--      </div>-->
<!--      aaa-->
    </div>
    <div class="doctors-container">
      <div class="doctors">
        <div class="doctors__title">
          <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-once="true"
              class="doctors__title">
            <span>{{doctorsStrings.title[0]}}</span> <span>{{doctorsStrings.title[1]}}</span>
          </div>
        </div>
        <div class="doctors__cards">
          <ArrowSlider arrowStyles="padding-top: 126.5px; padding-bottom: 17px;" :itemWidth="301" :itemsCount="doctorsStrings.doctors.length * 2">
            <DoctorCard v-for="(d, index) in doctorsStrings.doctors" :key="index" :doctor="d"/>
            <DoctorCard v-for="(d, index) in doctorsStrings.doctors" :key="index + 3" :doctor="d"/>
          </ArrowSlider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {doctorsStrings, DoctorsTabStrings} from "../../../tools/strings";
import DoctorCard from "../../Doctors/DoctorCard";
import ArrowSlider from "../../ArrowSlider/ArrowSlider";

export default {
  name: "Doctors",
  components: {
    DoctorCard,
    ArrowSlider
  },
  data() {
    return {
      DoctorsTabStrings, doctorsStrings
    }
  }
}
</script>

<style scoped>
.Doctors-tab-block {
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


.Doctors-tab-title {
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

.Doctors-tab-line {
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

.doctors-container {
  width: 100%;
  height: 835px;
  display: flex;
  justify-content: center;

.doctors {
  width: 1267px;
  height: 100%;
  padding: 100px 0 83px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

&__title {
   margin-bottom: 71.5px;
   text-transform: uppercase;
   font-size: 36px;
   user-select: none;

>span:last-child {
  color:#E64243;
}
}

&__cards {
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: row;
 }
}
}

</style>