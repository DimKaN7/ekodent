<template>
  <div class="service-card">
    <div class="service-card__image" :style="{'background-image': `url(${image})`}"></div>
    <div class="service-card__title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.service-card {
  width: 281.65px;
  height: 257.45px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  user-select: none;

  &:hover &__image {
    transform: scale(1.05);
  }

  &:hover {
    background-color: $bggreen;
    color: $bgwhite;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }

  &__image {
    width: 245px;
    height: 220px;
    position: absolute;
    left: -1px;
    top: -19.39px;
    border-radius: 10px;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.3s linear;
    border: 1px solid transparent;
  }

  &__title {
    text-transform: uppercase;
    font-size: 18px;
    position: absolute;
    top: 218.58px;
    left: 10.69px;
  }
}
</style>