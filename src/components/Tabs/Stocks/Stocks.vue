<template>
  <div>
    <div class="Stocks-tab-block">
<!--      <div class="Stocks-tab-title">-->
<!--        {{StocksTabStrings.title}}-->
<!--      </div>-->
<!--      <div class="Stocks-tab-line">-->
<!--      </div>-->
    </div>
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
  </div>

</template>

<script>
import {StocksTabStrings, stocksStrings} from "../../../tools/strings";
import StockCard from '../../Stocks/StockCard';
import ArrowSlider from '../../ArrowSlider/ArrowSlider';

export default {
  components: {StockCard, ArrowSlider},

  name: "Stocks",
  data() {
    return {
      StocksTabStrings, stocksStrings
    }
  }
}
</script>

<style scoped>

.Stocks-tab-block{
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


.Stocks-tab-title{
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

.Stocks-tab-line{
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}


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