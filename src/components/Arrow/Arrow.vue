<template>
  <div class="arrow-container" 
    :style="left 
      ? {'margin-right': '44px'}
      : {'transform': 'scale(-1, 1)', 'margin-left': '44px'}">
    <div class="arrow" @mouseenter="color = '#E64243';" @mouseleave="color = 'black';">
      <svg width="34" height="65" viewBox="0 0 34 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2.5" y1="-2.5" x2="41.5818" y2="-2.5" transform="matrix(-0.668026 0.744138 0.744138 0.668026 33.585 2.38086)" :stroke="color" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="3.94838" y1="31.7386" x2="30.056" y2="60.8209" :stroke="color" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    left: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      color: 'black',
    }
  }
}
</script>

<style lang="scss">
.arrow-container {
  width: 33px;
  height: 100%;
  flex: 0 0 33px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;

  .arrow {
    width: 100%;
    height: 65px;

    svg {
      cursor: pointer;
      >line {
        transition: stroke 0.3s ease-in-out;
      }
    }
  }

}
</style>