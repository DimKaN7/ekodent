<template>
  <div class="services-container">
    <div class="services">
      <div class="title">
        <span>{{servicesStrings.title[0]}} </span>
        <span>{{servicesStrings.title[1]}}</span>
      </div>
      <div class="services__cards">
        <ServiceCard v-for="(card, index) in servicesStrings.cards" :key="index" 
          :image="card.image" 
          :title="card.title"/>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from './ServiceCard';

import {servicesStrings} from '../../tools/strings';

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
  height: 966px;
  display: flex;
  justify-content: center;

  .services {
    width: 1267px;
    height: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-transform: uppercase;
      font-size: 36px;

      >span:last-child {
        color: $bgred;
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
</style>