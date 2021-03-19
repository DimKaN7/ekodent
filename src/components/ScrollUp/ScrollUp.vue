<template>
  <transition appear name="fade">
    <div class="scrollup">
      <div :style="{'background-image': `url(${arrowup})`}"></div>
    </div>
  </transition>
</template>

<script>
import arrowup from '../../assets/ScrollUp/arrowup.png';

export default {
  data() {
    return {
      arrowup,
    }
  }
}
</script>

<style lang='scss'>
.scrollup {
  width: 81px;
  height: 81px;
  position: fixed;
  top: calc(100% - 101px);
  left: calc(100% - 101px);
  border-radius: 50%;
  background-color: #E64243;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    background-color: #4D8E4D;
  }

  >div {
    width: 45px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
.fade-enter-active {
  animation: apear-animation 0.3s;
}
.fade-leave-active {
  animation: apear-animation 0.3s reverse;
}

@keyframes apear-animation {
  0% {
    transform: scale(.7);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>