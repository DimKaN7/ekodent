<template>
  <div class="reviews-container">
    <div class="reviews">
      <div class="reviews__title">
        <span>{{reviewsStrings.title[0]}}</span> <span>{{reviewsStrings.title[1]}}</span>
      </div>
      <div class="reviews__cards">
        <ArrowSlider arrowStyles="padding-top: 35px;" :itemWidth="301" :itemsCount="reviewsStrings.reviews.length * 2">
          <ReviewCard v-for="(review, index) in reviewsStrings.reviews" :key="index" :review="review"/>
          <ReviewCard v-for="(review, index) in reviewsStrings.reviews" :key="index + 3" :review="review"/>
        </ArrowSlider>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowSlider from '../ArrowSlider/ArrowSlider';
import ReviewCard from './ReviewCard';

import {reviewsStrings} from '../../tools/strings';

export default {
  name: 'Reviews',
  components: {
    ReviewCard, ArrowSlider
  },
  data() {
    return {
      reviewsStrings,
    }
  }
}
</script>

<style lang="scss">
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
        color:$bgred;
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