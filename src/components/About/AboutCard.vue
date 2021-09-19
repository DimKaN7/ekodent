<template>
  <div class="card-block">
    <div class="card-block__number">{{number}}</div>
    <div class="card-block__content">
      <span v-html="content"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard',
  props: {
    number: {
      type: Number,
      required: true,
    },
    content: {
      type: Text,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.card-block {
  width: 544px;
  height: 230px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;

  &__number {
    flex: 0 0 54px;
    color: #4D8E4D;
    font-size: 96px;
    line-height: 75px;
    margin-right: 3px;
  }

  &__content {
    flex: 1 0 230px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 16px 0 0 20px;
    font-size: 24px;
    position: relative;
    overflow: hidden;

    &::before {
      width: 5px;
      height: 99px;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: #E64243;
    }
  }
}
</style>