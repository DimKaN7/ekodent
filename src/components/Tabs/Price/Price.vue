<template>
  <div>
    <div class="Price-tab-block">
      <div class="Price-tab-title">
        {{PriceTabStrings.title}}
      </div>
      <div class="Price-tab-line">
      </div>
      <div v-for="(collum, index) in PriceTabStrings.collums" :key="index">
        <div class="Price-tab-block__subtitle">
          {{collum.subTitle}}
          <b-table striped hover :items="collum.textCollum" :fields="columnsName"></b-table>
        </div>
      </div>
      <b-button class="mb-4" pill variant="outline-secondary" href="../../../assets/Tabs/Price/Prices.pdf">{{PriceTabStrings.TextDownload}}</b-button>
    </div>
  </div>
</template>

<script>
import {PriceTabStrings} from "../../../tools/strings";
// import Background from '../../../assets/Tabs/Price/Background.png';
// import PriceDoc from '../../../assets/Tabs/Price/Prices.pdf';

export default {
  name: "Price",
  data() {
    return {
      PriceTabStrings,
      // Background,
      // PriceDoc,
      columnsName: [
        {
          key: "name",
          sortable: true,
          label: "Название"
        },
        {
          key: "price",
          sortable: true,
          label: "Цена",
        }
      ]
    }
  }
}
</script>

<style scoped>
.Price-tab-block{
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

.Price-tab-title{
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

.Price-tab-block__subtitle{
  font-family: Roboto;
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 29px;
}

.Price-tab-line{
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

::v-deep .sr-only{display:none !important}

</style>