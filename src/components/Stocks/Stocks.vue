<template>
  <div class="stocks-container">
    <div class="stocks">
      <div class="stocks__title">
        <span>{{stocksStrings.title[0]}}</span> <span>{{stocksStrings.title[1]}}</span>
      </div>
      <div class="stocks__cards">
        <div class="arrow" :style="{'background-image': `url(${stocksStrings.arrow})`}"></div>
        <div class="cards"></div>
        <div class="arrow" :style="{'background-image': `url(${stocksStrings.arrow})`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {stocksStrings} from '../../tools/strings';

export default {
  name: 'Stocks',
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
    padding: 98px 0 73px 0;
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
      }

      .arrow {
        width: 33px;
        height: 100%;
        flex: 0 0 33px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;

        &:first-child {
          margin-right: 44px;
        }

        &:last-child {
          transform: scale(-1, 1);
          margin-left: 44px;
        }
      }
    }
  }
}
</style>