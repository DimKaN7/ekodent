<template>
  <div class="reviews-container">
    <div class="reviews">
      <div 
        v-if="isMobile"
        class="reviews__title">
        <span>{{reviewsStrings.title[0]}}</span> <span>{{reviewsStrings.title[1]}}</span>
      </div>
      <div 
        v-else
        data-aos="fade-up" 
        data-aos-duration="300"
        data-aos-once="true"
        data-aos-offset="650"
        class="reviews__title">
        <span>{{reviewsStrings.title[0]}}</span> <span>{{reviewsStrings.title[1]}}</span>
      </div>
      <div class="reviews__cards">
        <ArrowSlider v-if="isMobile" :itemWidth="341" :itemsCount="reviewsStrings.reviews.length">
          <transition-group name="fade" tag="div">
            <ReviewCard
              v-for="i in [reviewIndex]" :key="i" :review="reviewsStrings.reviews[i]"/>
          </transition-group>
        </ArrowSlider>
        <ArrowSlider v-else animAnchor=".reviews__title" :animOffset="650" arrowStyles="padding-top: 35px;" :itemWidth="301" :itemsCount="reviewsStrings.reviews.length">
          <ReviewCard
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor=".reviews__title" 
            data-aos-offset="650"
            v-for="(review, index) in reviewsStrings.reviews" :key="index" :review="review"/>
        </ArrowSlider>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowSlider from '../ArrowSlider/ArrowSlider';
import ReviewCard from './ReviewCard';

import {reviewsStrings} from '../../tools/strings';
import { mapGetters } from 'vuex';

export default {
  name: 'Reviews',
  components: {
    ReviewCard, ArrowSlider
  },
  data() {
    return {
      reviewsStrings,
      timer: null,
      reviewIndex: 0,
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
      this.reviewIndex = (this.reviewIndex + 1) % reviewsStrings.reviews.length
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/fade.scss';

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
      line-height: 1;

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

@media (max-width: 1286px) {
  .reviews-container {
    padding-top: 18px;
    height: 635px;
    .reviews {
      padding-top: 0;
      padding-bottom: 0;

      &__title {
        margin-bottom: 30px;
      }
    }
  }
}
</style>