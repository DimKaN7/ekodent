<template>
    <div class="doctors-container">
      <div class="doctors">
        <div
            v-if="!isMobile"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
            data-aos-offset="0"
            class="doctors__title">
          <span>{{doctorsStrings.title[0]}}</span> <span>{{doctorsStrings.title[1]}}</span>
        </div>
        <div
            v-else
            class="doctors__title">
          <span>{{doctorsStrings.title[0]}}</span> <span>{{doctorsStrings.title[1]}}</span>
        </div>
        <div class="doctors__cards">
          <ArrowSlider v-if="isMobile" :itemWidth="341" :itemsCount="doctorsStrings.doctors.length">
            <transition-group name="fade" tag="div">
              <DoctorCard v-for="i in [doctorIndex]" :key="i" :doctor="doctorsStrings.doctors[i]"/>
            </transition-group>
          </ArrowSlider>
          <ArrowSlider v-else animAnchor=".doctors__title" :animOffset="0" arrowStyles="padding-top: 126.5px; padding-bottom: 17px;" :itemWidth="301" :itemsCount="doctorsStrings.doctors.length">
            <DoctorCard v-for="(d, index) in doctorsStrings.doctors" :key="index" :doctor="d" :aos_offset="0"/>
          </ArrowSlider>
        </div>
      </div>
    </div>
</template>

<script>
import DoctorCard from '../../Doctors/DoctorCard';
import ArrowSlider from '../../ArrowSlider/ArrowSlider';

import { doctorsStrings } from '../../../tools/strings';
import { mapGetters } from 'vuex';

export default {
  name: 'DoctorsTab',
  components: {
    DoctorCard,
    ArrowSlider
  },
  data() {
    return {
      doctorsStrings,
      timer: null,
      doctorIndex: 0,
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },
  mounted() {
    this.timer = setInterval(this.next, 4000);
  },
  methods: {
    next() {
      this.doctorIndex = (this.doctorIndex + 1) % doctorsStrings.doctors.length
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/fade.scss';

.doctors-container {
  padding-top: 100px;
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
      line-height: 1;

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

@media (max-width: 1286px) {
  .doctors-container {
    padding-top: 120px;
    height: 625px;
    .doctors {
      padding-top: 0;
      padding-bottom: 0;

      &__title {
        margin-bottom: 30px;
      }
    }
  }
}
</style>