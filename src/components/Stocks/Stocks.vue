<template>
  <div class="stocks-container">
    <div class="stocks">
      <div 
        data-aos="fade-up" 
        data-aos-duration="300"
        data-aos-once="true"
        class="stocks__title">
        <span>{{stocksStrings.title[0]}}</span> <span>{{stocksStrings.title[1]}}</span>
      </div>
      <div class="stocks__cards">
        <ArrowSlider :itemWidth="535" :itemsCount="stocksStrings.stocks.length + 2">
          <StockCard 
            data-aos="zoom-out" 
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor=".stocks__title"
            v-for="(stock, index) in stocksStrings.stocks" :key="index" :stock="stock"/>
          <StockCard 
            data-aos="zoom-out" 
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor=".stocks__title"
            v-for="(stock, index) in stocksStrings.stocks" :key="index + 2" :stock="stock"/>
        </ArrowSlider>
      </div>
    </div>
  </div>
</template>

<script>
import StockCard from './StockCard';
import ArrowSlider from '../ArrowSlider/ArrowSlider';

import {stocksStrings} from '../../tools/strings';

export default {
  name: 'Stocks',
  components: {
    StockCard, ArrowSlider,
  },
  data() {
    return {
      stocksStrings,
    }
  },
}
</script>

<style lang="scss">
.stocks-container {
  width: 100%;
  height: 733px;
  display: flex;
  justify-content: center;

  .stocks {
    width: 1267px;
    height: 100%;
    padding-top: 98px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      margin-bottom: 80px;
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