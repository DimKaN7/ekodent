<template>
<div class="preview-container">
  <div class="preview" :style="{backgroundImage: `url(${Background})`}">
    <div class="preview__gradient"></div>
    <div class="preview__description">
      <div class="preview-text" v-for="(d,index) in previewStrings.descriptions" :key="index">
        {{d}}
      </div>
      <SignUp class="preview__sign_up"></SignUp>
    </div>
  </div>
  <div class="advantages-container">
    <div class="advantages">
      <div class="advantage" v-for="(a,index) in previewStrings.advantages" :key="index">
        <div class="advantage__icon" :style="{backgroundImage: `url(${a.image})`}"></div>
        <div class="advantage__text">{{a.text}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Background from '../../assets/Preview/Background.png';
import { previewStrings } from '../../tools/strings';
import SignUp from '../SignUp/SignUp';

export default {
    name: 'Preview',
    components: {
      SignUp,
    },
    data () {
        return {
            Background, previewStrings
        }
    },

}
</script>

<style lang="scss">
.preview-container {
    font-family: Comic Sans MS, Comic Sans, cursive;
    text-align: justify;
    width: 100%;
    height: 840px;
    background-color: $bgwhite;
    display: flex;
    flex-direction: column;
    align-items: center;

    .preview {
        width: 100%;
        height: 660px;
        display: flex;
        justify-content: center;
        background-position: center;
        background: no-repeat;
        background-size: cover;
        
        &__gradient {
            width: 100%;
            height: 800px;
            top: 0;
            left: 0;
            position: absolute;
            background: linear-gradient(180deg, #FFFFFF 14.24%, rgba(255, 255, 255, 0) 80.19%);
        }

        &__description {
          width: 1267px;
          height: 660px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 199px 0px 214px 0; 
          z-index: 2;
          
          .preview-text {
            height: fit-content;
            width: 100%;
            font-size: 24px;

            &:first-child {
              font-size: 64px;
              margin-bottom: 75px;
            }
          }

        }
        &__sign_up{
          margin-top: 50px;
          font-family: 'Roboto', sans-serif;
        }
    }
    .advantages-container {
      width: 100%;
      height: 180px;
      background-color: $bggreen;
      display: flex;
      justify-content: center;

      .advantages {
        width: 1267px;
        height: 100%;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;

        .advantage {
          height: 100%;
          width: 170px;
          display: flex;
          flex-direction: column;
          align-items: center;
          @media (max-width:360px) {
            justify-content: center;
            width: 100%;
          }

          &__icon {
            width: 60px;
            height: 64px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            margin-bottom: 26px;
          }

          &__text {
            font-size: 16px;
            text-align: center;
            color: white;
          }
        }
      }
    }  
}

@media (max-width: 1286px) {
  .preview-container {
    height: auto;
    .preview {
      background-position: center;
      height: 686px;

      &__gradient {
        height: 640px;
      }

      &__description {
        width: 100%;
        height: auto;
        padding: 136px 20px 59px 22px; 
        align-items: flex-start;
      }

      &-text {
        font-size: 18px !important;

        &:first-child {
          line-height: 42.19px !important;
          font-size: 36px !important;
          margin-bottom: 45px !important;
        }
      }
    }
    .advantages-container {
      height: auto;

      .advantages {
        width: 100% !important;
        flex-wrap: wrap;
        gap: 15px;
        padding: 15px 5px;
      }
    }
  }
}
</style>