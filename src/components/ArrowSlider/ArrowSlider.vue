<template>
  <div class="arrow-slider-container" >
    <Arrow left :arrowStyles="arrowStyles" @arrowClick="onClick" :show="isShown(true)"/>
    <div class="arrow-slider">
      <div class="slider" :style="{'width': `${sliderWidth}px`, 'left': `-${scrollIndex * (itemWidth + spaceBetween)}px`}">
        <slot></slot>
      </div>
    </div>
    <Arrow :arrowStyles="arrowStyles" @arrowClick="onClick" :show="isShown(false)"/>
  </div>
</template>
<script>
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
    }
  },
  data() {
    return {
      sliderWidth: 0,
      scrollIndex: 0,
      spaceBetween: 0,
      scrollPagesCount: 0,
    }
  },
  beforeMount() {
    const countInSlide = Math.floor(1113 / this.itemWidth);
    this.scrollPagesCount = this.itemsCount - countInSlide;
    this.spaceBetween = (1113 - (this.itemWidth * countInSlide)) / (countInSlide - 1);
    const sliderWidth = this.itemWidth * this.itemsCount + this.spaceBetween * (this.itemsCount - 1) + 34;
    this.sliderWidth =  sliderWidth;
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
    }
  }
}
</script>

<style lang="scss">
.arrow-slider-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .arrow-slider {
    flex: 1 0 auto;
    max-width: 1147px;
    height: 100%;
    overflow-x: hidden;
    padding: 0 17px;
    position: relative;

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