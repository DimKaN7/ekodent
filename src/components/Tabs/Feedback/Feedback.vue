<template>
  <div>
    <div class="Feedback-tab-block">
<!--      <div class="Feedback-tab-title">-->
<!--        {{ FeedbackTabStrings.title }}-->
<!--      </div>-->
<!--      <div class="Feedback-tab-line">-->
<!--      </div>-->
<!--      aaa-->
    </div>
    <div class="reviews-container">
      <div class="reviews">
        <div class="reviews__title">
          <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-once="true"
              class="reviews__title">
            <span>{{reviewsStrings.title[0]}}</span> <span>{{reviewsStrings.title[1]}}</span>
          </div>
        </div>
        <div class="reviews__cards">
          <ArrowSlider arrowStyles="padding-top: 35px;" :itemWidth="301" :itemsCount="reviewsStrings.reviews.length * 2">
            <ReviewCard
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-once="true"
                data-aos-anchor=".reviews__title"
                v-for="(review, index) in reviewsStrings.reviews" :key="index" :review="review"/>
            <ReviewCard
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-once="true"
                data-aos-anchor=".reviews__title"
                v-for="(review, index) in reviewsStrings.reviews" :key="index + 3" :review="review"/>
          </ArrowSlider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FeedbackTabStrings, reviewsStrings} from "../../../tools/strings";
import ReviewCard from "../../Reviews/ReviewCard";
import ArrowSlider from "../../ArrowSlider/ArrowSlider";

export default {
  name: "Feedback",
  components: {
    ReviewCard, ArrowSlider
  },
  data() {
    return {
      FeedbackTabStrings, reviewsStrings
    }
  }
}
</script>

<style scoped>
.Feedback-tab-block {
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


.Feedback-tab-title {
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

.Feedback-tab-line {
  background-color: #E64243;
  width: 73px;
  height: 2px;
  margin-bottom: 42px;
}

.reviews-container {
  width: 100%;
  height: 916px;
  display: flex;
  justify-content: center;

.reviews {
  width: 1267px;
  height: 100%;
  padding: 114px 0 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

&__title {
   margin-bottom: 39px;
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
 }
}
}

</style>