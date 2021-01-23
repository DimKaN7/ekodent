<template>
  <div class="stocks-container">
    <div class="stocks">
      <div class="stocks__title">
        <span>{{stocksStrings.title[0]}}</span> <span>{{stocksStrings.title[1]}}</span>
      </div>
      <div class="stocks__cards">
        <Arrow left/>
        <div class="cards">
          <StockCard v-for="(stock, index) in stocksStrings.stocks" :key="index" :stock="stock"/>
        </div>
        <Arrow />
      </div>
    </div>
  </div>
</template>

<script>
import StockCard from './StockCard';
import Arrow from './Arrow';

import {stocksStrings} from '../../tools/strings';

export default {
  name: 'Stocks',
  components: {
    StockCard, Arrow,
  },
  data() {
    return {
      stocksStrings,
    }
  }
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
    text-transform: uppercase;
    font-size: 36px;

    &__title {
      margin-bottom: 89px;

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

      // .arrow-container {
      //   &:first-child {
      //     margin-right: 44px;
      //   }

      //   &:last-child {
      //     transform: scale(-1, 1);
      //     margin-left: 44px;
      //   }
      // }
    }
  }
}
</style>