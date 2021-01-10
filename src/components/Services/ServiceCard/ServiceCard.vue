<template>
  <div class="service-card">
    <div class="service-card__image" :style="{backgroundImage: `url(${getImage})`}"></div>
    <div class="service-card__title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    imageIndex: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  },
  computed: {
    getImage() {
      return require(`../../../assets/Services/${this.imageIndex}.png`);
    }
  }
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

  &:hover {
    background-color: #4D8E4D;
    color: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }

  &__image {
    width: 252px;
    height: 222px;
    position: absolute;
    left: 0px;
    top: -18.39px;
    border-radius: 10px;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: contain;
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