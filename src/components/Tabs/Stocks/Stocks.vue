<template>
  <div class="stocks-container">
    <div class="stocks">
      <div
          v-if="!isMobile"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-once="true"
          data-aos-offset="0"
          class="stocks__title">
        <span>{{stocksStrings.title[0]}}</span> <span>{{stocksStrings.title[1]}}</span>
      </div>
      <div
          v-else
          class="stocks__title">
        <span>{{stocksStrings.title[0]}}</span> <span>{{stocksStrings.title[1]}}</span>
      </div>
      <div class="stocks__cards">
        <ArrowSlider v-if="isMobile" :itemWidth="341" :itemsCount="stocksStrings.stocks.length">
          <transition-group name="fade" tag="div">
            <StockCard
                v-for="i in [stockIndex]" :key="i"
                :stock="stocksStrings.stocks[i]"
            />
          </transition-group>
        </ArrowSlider>
        <ArrowSlider v-else animAnchor=".stocks__title" :animOffset="600" :itemWidth="535" :itemsCount="stocksStrings.stocks.length">
          <StockCard
              data-aos="zoom-out"
              data-aos-duration="300"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor=".stocks__title"
              data-aos-offset="0"
              v-for="(stock, index) in stocksStrings.stocks" :key="index" :stock="stock"
          />
        </ArrowSlider>
      </div>
    </div>
  </div>
</template>

<script>
import StockCard from '../../Stocks/StockCard';
import ArrowSlider from '../../ArrowSlider/ArrowSlider';

import { stocksStrings } from '../../../tools/strings';
import { mapGetters } from 'vuex';

export default {
  name: 'Stocks',
  components: {
    StockCard, ArrowSlider,
  },
  data() {
    return {
      stocksStrings,
      timer: null,
      stockIndex: 0,
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ]),
  },
  mounted() {
    this.timer = setInterval(this.next, 4000);
  },
  methods: {
    next() {
      this.stockIndex = (this.stockIndex + 1) % stocksStrings.stocks.length
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/fade.scss';

.stocks-container {
  padding-top: 120px;
  margin-bottom: 60px;
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
      line-height: 1;
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

@media (max-width: 1286px) {
  .stocks-container {
    padding-top: 120px;
    height: 400px;
    .stocks {
      padding-top: 0;

      &__title {
        margin-bottom: 30px;
      }
    }
  }
}
</style>