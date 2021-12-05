<template>
  <div class="doctor-card">
    <div 
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-once="true"
      data-aos-anchor=".doctors__title"
      data-aos-offset="650"
      class="doctor-card__image" :style="{'background-image': `url(${doctor.image})`}"></div>
    <div 
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delat="300"
      data-aos-once="true"
      data-aos-anchor=".doctors__title"
      data-aos-offset="650"
      class="doctor-card__info">
      <div class="card-info">
        <div class="card-info__name">
          <span>{{doctor.name.split(' ')[0]}}</span> <span>{{doctor.name.split(' ')[1]}}</span>
        </div>
        <div class="card-info__position">{{doctor.position}}</div>
        <div class="card-info__experience" v-if="doctor.experience">{{doctor.experience}}</div>
      </div>
      <div class="card-info__button">{{doctor.buttonText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorCard',
  props: {
    doctor: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.doctor-card {
  width: 301px;
  height: 521.5px;
  position: relative;
  // box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  &__image {
    width: 253px;
    height: 253px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
  }

  &__info {
    width: 100%;
    height: 395px;
    position: absolute;
    left: 0;
    top: 126.5px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;

    .card-info {
      width: 100%;
      height: 136px;
      margin-top: 153px;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__name {
        height: 56px;
        font-size: 24px;
        text-align: center;
        
        >span:first-child {
          color:#E64243;
        }
      }

      &__position {
        margin-top: 15px;
      }

      &__experience {
        margin-top: 23px;
      }

      &__button {
        width: 232px;
        height: 40px;
        color: white;
        background-color: #E64243;
        border-radius: 100px;
        margin-top: 42px;
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
</style>