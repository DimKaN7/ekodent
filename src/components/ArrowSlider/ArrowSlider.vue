<template>
  <div class="arrow-slider-container">
    <Arrow 
      v-if="!isMobile"
      data-aos="fade-up" 
      data-aos-duration="300"
      data-aos-once="true"
      :data-aos-anchor="animAnchor"
      :data-aos-offset="animOffset"
      left :arrowStyles="arrowStyles" 
      @arrowClick="onClick" 
      :show="isShown(true)"
      :width="34"
      :height="65" />
    <div class="arrow-slider" ref="slider">
      <div v-if="!isMobile" class="slider" :style="{'width': `${sliderWidth}px`, 'left': `-${scrollIndex * (itemWidth + spaceBetween)}px`}">
        <slot></slot>
      </div>
      <div class="fade-wrapper" v-else>
        <transition mode="out-in" name="fade">
          <div class="fade-slider" v-if="scrollIndex == 0">
            <slot></slot>
          </div>
          <div class="fade-slider" v-else-if="scrollIndex == 1">
            <slot></slot>
          </div>
          <div class="fade-slider" v-else>
            <slot></slot>
          </div>
        </transition>
      </div>
    </div>
    <Arrow 
      v-if="!isMobile"
      data-aos="fade-up" 
      data-aos-duration="300"
      data-aos-once="true"
      :data-aos-anchor="animAnchor"
      :data-aos-offset="animOffset"
      :arrowStyles="arrowStyles" 
      @arrowClick="onClick" 
      :show="isShown(false)"
      :width="34"
      :height="65" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Arrow from '../Arrow/Arrow';

export default {
  name: 'ArrowSlider',
  components: {
    Arrow,
  },
  props: {
    arrowStyles: {
      type: String, 
      default: '',
    },
    itemWidth: {
      type: Number,
      required: true,
    },
    itemsCount: {
      type: Number,
      required: true,
    },
    animOffset: {
      type: Number,
      required: false,
    },
    animAnchor: {
      type: String,
      require: false,
    }
  },
  computed: {
    ...mapGetters([
      'isMobile',
    ]),
  },
  data() {
    return {
      sliderWidth: 0,
      scrollIndex: 0,
      spaceBetween: 0,
      scrollPagesCount: 0,
    }
  },
  // beforeMount() {
  // },
  mounted() {
    const clientWidth = this.$refs.slider.clientWidth - 34
    const countInSlide = Math.floor(clientWidth / this.itemWidth);
    // const countInSlide = Math.floor(375 / this.itemWidth)
    this.scrollPagesCount = this.itemsCount - countInSlide;
    this.spaceBetween = (clientWidth - (this.itemWidth * countInSlide)) / (countInSlide === 1 ? 1 : countInSlide - 1);
    const sliderWidth = this.itemWidth * this.itemsCount + this.spaceBetween * (this.itemsCount - 1) + 34;
    this.sliderWidth =  sliderWidth;

    // const countInSlide = Math.floor(1113 / this.itemWidth);
    // this.scrollPagesCount = this.itemsCount - countInSlide;
    // this.spaceBetween = (1113 - (this.itemWidth * countInSlide)) / (countInSlide - 1);
    // const sliderWidth = this.itemWidth * this.itemsCount + this.spaceBetween * (this.itemsCount - 1) + 34;
    // this.sliderWidth =  sliderWidth;

    console.log(countInSlide, this.scrollPagesCount, this.spaceBetween, this.sliderWidth)
  },
  beforeDestroy() {

  },
  methods: {
    onClick(isLeft) {
      if (isLeft) {
        if (this.scrollIndex != 0) {
          this.scrollIndex--;
        }
      }
      else {
        if (this.scrollIndex != this.scrollPagesCount) {
          this.scrollIndex++;
        }
      }
    },
    isShown(isleft) {
      return isleft
              ? this.scrollIndex == 0 
                  ? false
                  : true
              : this.scrollIndex == this.scrollPagesCount
                  ? false
                  : true;
    },
  }
}
</script>

<style lang="scss">
.arrow-slider-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  .arrow-slider {
    flex: 1 0 auto;
    max-width: 1147px;
    height: 100%;
    overflow: hidden;
    // overflow: scroll;
    padding: 0 17px;
    position: relative;

    .fade-wrapper {
      display: flex;
      justify-content: center;
    }

    .slider {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 17px;
      transition: left 0.3s ease-in-out;
    }
  }
}
</style>