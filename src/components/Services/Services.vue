<template>
  <div data-aos="fade"
      data-aos-duration="1000"
      class="services-container">
    <div class="services">
      <div class="title">
        <span>{{servicesStrings.title[0]}} </span>
        <span>{{servicesStrings.title[1]}}</span>
      </div>
      <div class="services__cards">
        <ServiceCard v-for="(card, index) in servicesStrings.cards" :key="index" 
          :image="card.image" 
          :title="card.title"
          :url="card.url"/>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from './ServiceCard';

import { servicesStrings } from '../../tools/strings';

export default {
  name: 'Services',
  components: {
    ServiceCard,
  },
  data() {
    return {
      servicesStrings,
    }
  }
}
</script>

<style lang="scss">
.services-container {
  width: 100%;
  // height: 1106px;
  display: flex;
  justify-content: center;

  .services {
    width: 1267px;
    height: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-transform: uppercase;
      font-size: 36px;
      user-select: none;

      >span:last-child {
        color: #E64243;
      }
    }

    &__cards {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 100px;
      margin-top: 108px;
    }
  }
}

@media (max-width: 1286px) {
  .services-container {
    height: fit-content !important;
    
    .services {
      padding-top: 33px !important;
      padding-bottom: 0px !important;
      height: fit-content !important;
  
      &__cards {
        margin-top: 51px !important;
        flex-direction: column !important;
        align-items: center !important;
        row-gap: 35px;
      }
    }
  }
}
</style>