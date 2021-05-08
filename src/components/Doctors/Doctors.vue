<template>
  <div class="doctors-container">
    <div class="doctors">
      <div 
        data-aos="fade-up" 
        data-aos-duration="300"
        data-aos-once="true"
        class="doctors__title">
        <span>{{doctorsStrings.title[0]}}</span> <span>{{doctorsStrings.title[1]}}</span>
      </div>
      <div class="doctors__cards">
        <ArrowSlider arrowStyles="padding-top: 126.5px; padding-bottom: 17px;" :itemWidth="301" :itemsCount="doctorsStrings.doctors.length * 2">
          <DoctorCard v-for="(d, index) in doctorsStrings.doctors" :key="index" :doctor="d"/>
          <DoctorCard v-for="(d, index) in doctorsStrings.doctors" :key="index + 3" :doctor="d"/>
        </ArrowSlider>
      </div>
    </div>
  </div>
</template>

<script>
import DoctorCard from './DoctorCard';
import ArrowSlider from '../ArrowSlider/ArrowSlider';

import {doctorsStrings} from '../../tools/strings';

export default {
  name: 'Doctors',
  components: {
    DoctorCard, 
    ArrowSlider
  },
  data() {
    return {
      doctorsStrings,
    }
  }
}
</script>

<style lang="scss">
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