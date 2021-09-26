<template>
  <div class="recommend" :style="{backgroundImage: `url(${Background})`}">
    <div class="recommend-gradient"></div> 
    <div class="recommend__content">

      <div class="text" v-for="(t,index) in recommendStrings.text" :key="index">
                {{t}}
        </div>

      <div class="consultation">ЗАПИСАТЬСЯ НА ПРИЁМ</div>
    </div>
  </div>
</template>

<script>
import Background from '../../assets/Recommend/Background.png';
import {recommendStrings} from '../../tools/strings';
export default {
    name: 'Recommend',
    data () {
      return {
        Background, recommendStrings
      }
    },  
}
</script>

<style lang="scss">

.recommend {
  position: relative;
  width: 100%;
  height: 730px;
  display: flex;
  background-position: center;
  background: no-repeat;
  background-size: cover;
  z-index: 1;
  padding: 180px 0 30px 336px; 

  .recommend-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);;
    z-index: 2;
  }

  .recommend__content {
    width: 678px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    z-index: 3;

    .text {
      height: fit-content;
      width: 100%;
      font-size: 24px;
      margin-bottom: 45px;

        &:first-child {
          font-weight: 700;
          font-size: 34px;
          margin-bottom: 45px;
        }

    }

    .consultation {
      width: 440px;
      height: 40px;
      font-size: 18px;
      background-color: $bgred;
      border-radius: 100px;
      color: $bgwhite;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      user-select: none;

        &:hover {
        background-color: $bggreen;
      }
    }
  }

}

</style>