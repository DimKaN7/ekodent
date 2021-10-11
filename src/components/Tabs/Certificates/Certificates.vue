<template>
  <div>
    <div class="Certificates-tab-block">
      <div class="Certificates-tab-title">
        {{CertificatesTabStrings.title}}
      </div>
      <div class="Certificates-tab-line">
      </div>
      <div>
        <b-img :src="CertificatesImage1" fluid alt="Responsive image"></b-img>
      </div>
      <div>
        <b-img :src="CertificatesImage2" fluid alt="Responsive image"></b-img>
      </div>
      <div>
        <b-img :src="CertificatesImage3" fluid alt="Responsive image"></b-img>
      </div>
    </div>
<!--    <div class="stocks-container">-->
<!--      <div class="stocks">-->
<!--        <div-->
<!--            data-aos="fade-up"-->
<!--            data-aos-duration="300"-->
<!--            data-aos-once="true"-->
<!--            class="stocks__title">-->
<!--          <span>{{CertificatessStrings.title[0]}}</span> <span>{{CertificatessStrings.title[1]}}</span>-->
<!--        </div>-->
<!--        <div class="stocks__cards">-->
<!--          <ArrowSlider :itemWidth="535" :itemsCount="CertificatessStrings.stocks.length + 2">-->
<!--            <StockCard-->
<!--                data-aos="zoom-out"-->
<!--                data-aos-duration="300"-->
<!--                data-aos-delay="300"-->
<!--                data-aos-once="true"-->
<!--                data-aos-anchor=".stocks__title"-->
<!--                v-for="(stock, index) in CertificatessStrings.stocks" :key="index" :stock="stock"/>-->
<!--            <StockCard-->
<!--                data-aos="zoom-out"-->
<!--                data-aos-duration="300"-->
<!--                data-aos-delay="300"-->
<!--                data-aos-once="true"-->
<!--                data-aos-anchor=".stocks__title"-->
<!--                v-for="(stock, index) in CertificatessStrings.stocks" :key="index + 2" :stock="stock"/>-->
<!--          </ArrowSlider>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <img src="../../../../../../Downloads/1.jpg" height="1753" width="1240"/>-->

  </div>
</template>

<script>
import {CertificatesTabStrings, CertificatessStrings} from "../../../tools/strings";
// import StockCard from '../../Stocks/StockCard';
// import ArrowSlider from '../../ArrowSlider/ArrowSlider';
import CertificatesImage1 from '../../../assets/Tabs/Certificates/1.jpg'
import CertificatesImage2 from '../../../assets/Tabs/Certificates/2.jpg'
import CertificatesImage3 from '../../../assets/Tabs/Certificates/3.jpg'

export default {
  // components: {StockCard, ArrowSlider},
  name: "Certificates",
  data() {
    return {
      CertificatesTabStrings, CertificatessStrings, CertificatesImage1, CertificatesImage2, CertificatesImage3
    }
  }
}
</script>

<style scoped>

.Certificates-tab-block{
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


.Certificates-tab-title{
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

.Certificates-tab-line{
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