<template>
  <div class="director-container">
    <div class="director-main">
      <div class="director">
        <div class="director__icon" :style="{backgroundImage: `url(${directorStrings.image})`}"></div>
        <div class="director__quote" v-for="(t,index) in directorStrings.text" :key="index" v-html="t">
        </div>
      </div>
      <div class="director-photo" :style="{backgroundImage: `url(${Background})`}"></div>
    </div>
  </div>
</template>

<script>
import Background from '../../assets/Director/Background.png';
import {directorStrings} from '../../tools/strings';
export default {
  name: 'Director',
  data () {
    return {
      Background, directorStrings
    }
  }
}
</script>

<style lang="scss">
.director-container {
  width: 100%;
  height: 613px;
  background-color: $bgwhite;
  display: flex;
  justify-content: center;

    .director-main {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      width: 1267px;
      height: 100%;
      justify-content: space-between;
    }

      .director {
        display: flex;
        width: 698px;
        height: 100%;
        flex-direction: column;
        align-items: center;

          .director__icon {
            position: relative;
            width: 217px;
            height: 201px;
            background-position: top;
            background: no-repeat;
            background-size: contain;
          }

          .director__quote {
            width: 100%;
            align-items: center;
            font-size: 24px;
            text-align: justify;

             &:last-child {
               text-align: right;
               align-items: right;
                font-weight: 500;
                padding-left: 380px;
                margin-top: 86px;
              }
          }
      
      }

      .director-photo {
        width: 458px;
        height: 468px;
        justify-content: left;
        background-position: center;
        background: no-repeat;
        background-size: cover;
        margin-top: 75px;
      }
}

</style>