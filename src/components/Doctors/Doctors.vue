<template>
  <div class="doctors-container">
    <div class="doctors">
      <div class="doctors__title">
        <span>{{doctorsStrings.title[0]}}</span> <span>{{doctorsStrings.title[1]}}</span>
      </div>
      <div class="doctors__cards">
         <Arrow left/>
          <div class="cards">
            <DoctorCard v-for="(d, index) in doctorsStrings.doctors" :key="index" :doctor="d"/>
          </div>
          <Arrow />
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../Arrow/Arrow';
import DoctorCard from './DoctorCard';

import {doctorsStrings} from '../../tools/strings';

export default {
  name: 'Doctors',
  components: {
    Arrow, DoctorCard,
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
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      margin-bottom: 198px;
      text-transform: uppercase;
      font-size: 36px;

      >span:last-child {
        color:$bgred;
      }
    }

    &__cards {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;

      .cards {
        flex: 1 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>