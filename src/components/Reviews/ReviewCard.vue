<template>
  <div class="review-card">
    <div class="review-card__image"></div>
    <div class="review-card__info">
      <div class="card-info">
        <div class="card-info__title">
          <span>{{review.title}}</span>
        </div>
        <div class="card-info__message" v-html="review.message"></div>
        <!-- <div class="card-info__experience" v-if="review.experience">{{review.experience}}</div> -->
      </div>
<!--      <div class="card-info__button">{{review.buttonText}}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    review: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.review-card {
  width: 301px;
  height: 634px;
  position: relative;
  // box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  &__image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
    background-color: #4D8E4D;
  }

  &__info {
    width: 100%;
    min-height: 599px;
    height: fit-content;
    position: absolute;
    left: 0;
    top: 35px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 17px 0px;

    .card-info {
      width: 100%;
      height: 364px;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        font-size: 20px;
        text-align: center;
        font-weight: 700;
      }

      &__message {
        font-size: 14px;
        height: 100%;
        margin-top: 38px;
        text-align: center;
        overflow-y: auto;
      }

      &__button {
        width: 232px;
        height: 40px;
        color: white;
        background-color: #E64243;
        border-radius: 100px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        user-select: none;

        &:hover {
          background-color: #4D8E4D;
        }
      }
    }
  }
}

@media (max-width: 1286px) {
  .review-card {
    width: 341px;
    height: 533px;

    &__info {
      min-height: 498px;
      height: fit-content;
    }
  }
}

@media (max-width: 350px) {
  .review-card {
    width: 300px;
  }
}
</style>