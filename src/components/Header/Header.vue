<template>
  <div class="header-container">
    <div class="header">

      <div class="info">
        <a class="info__logo" href="#"></a>
        <InfoContent v-for="(i, index) in icons" :key="index" :icon="i" :texts="headerStrings[index].texts" 
          :hrefs="headerStrings[index].hrefs" :styles="index === 3 ? 'font-weight: 500; font-size: 18px;' : ''"/>
      </div>

      <div class="menu">
        <div class="menu-items">
          <div :class="['menu-items__item', (index === selectedItem) && 'selected']" v-for="(item, index) in menuItems" :key="item">
            {{item}}
          </div>
          <div class="sign-up">ЗАПИСАТЬСЯ НА ПРИЕМ</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Mail from '../../assets/Header/Mail.png';
import Time from '../../assets/Header/Time.png';
import Location from '../../assets/Header/Location.png';
import Phone from '../../assets/Header/Phone.png';

import InfoContent from './InfoContent';
import {headerStrings} from '../../tools/strings';

export default {
  name: 'Header',
  components: {
    InfoContent,
  },
  data() {
    return {
      icons: [Mail, Time, Location, Phone],
      headerStrings,
      menuItems: [
        'Главная', 'О клинике', 'Цены', 'Услуги', 'Врачи', 'Отзывы', 'Вопросы'
      ],
      selectedItem: 0,
    }
  }
}
</script>

<style lang="scss">
.header-container {
  width: 100%;
  height: 140px;
  background-color: $bgwhite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;

  .header {
    width: 1267px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .info {
      width: 100%;
      height: 84px;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &__logo {
        width: 338px;
        height: 61px;
        background-image: url('../../assets/Header/Logo.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    .menu {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex: 1 0 auto;
      align-items: center;

      &-items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__item {
          position: relative;
          text-transform: uppercase;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            color: $bgred;
          }

          &.selected {
            color: $bgred;

            &::after {
              position: absolute;
              left: 0;
              top: calc(100% + 6px);
              content: "";
              width: 100%;
              height: 2px;
              background-color: $bgred;
            }
          }
        }

        .sign-up {
          width: 243px;
          height: 40px;
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
  }
}
</style>