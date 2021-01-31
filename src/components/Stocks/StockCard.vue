<template>
  <div class="stock-card">
    <div class="stock-card__image">
      <div class="image" :style="{'background-image': `url(${stock.image})`}"></div>
    </div>
    <div class="stock-card__title">{{stock.title}}</div>
    <div class="stock-card__button">{{stock.buttonText}}</div>
  </div>
</template>

<script>
export default {
  name: 'StockCard',
  props: {
    stock: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.stock-card {
  width: 535px;
  height: 500px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &:hover .image {
    transform: scale(1.05);
  }

  &__image {
    width: 100%;
    height: 285px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    .image {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.3s ease-in-out;
    }
  }

  &__title {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 36px;
  }

  &__button {
    width: 240px;
    height: 40px;
    background-color: #E64243;
    color: white;
    margin: 46px 0 25px 0;
    border-radius: 100px;
    font-size: 18px;
    text-transform: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: #4D8E4D;
    }
  }
}
</style>