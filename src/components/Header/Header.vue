<template>
  <div class="header-container">
    <div class="header">
      <div class="info">

        <a class="info__logo" href="#"></a>

        <div class="info__content">
          <div class="icon" :style="{backgroundImage: `url(${Mail})`, marginRight: '6px'}"></div>
          <div class="text" style="justify-content: center;">
            <a href="mailto:eko-dent2001@mail.ru">eko-dent2001@mail.ru</a>
          </div>
        </div>

        <div class="info__content">
          <div class="icon" :style="{backgroundImage: `url(${Time})`, marginRight: '9px'}"></div>
          <div class="text">
            <div>пнд — птн: 10.00 — 20.00</div>
            <div>сбт — вскр: 11.00 — 16.00</div>
          </div>
        </div>

        <div class="info__content">
          <div class="icon" :style="{backgroundImage: `url(${Location})`, marginRight: '1px'}"></div>
          <div class="text">
            <div>г. Иркутск</div>
            <div>ул. Декабрьских событий, 109</div>
          </div>
        </div>

        <div class="info__content">
          <div class="icon" :style="{backgroundImage: `url(${Phone})`, marginRight: '4px'}"></div>
          <div class="text" style="font-weight: 500; font-size: 18px;">
            <a href="tel:+79246136900">+7 924 613 6900</a>
            <a href="tel:+73952252712">+7 (3952) 252-712</a>
          </div>
        </div>
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

  export default {
    name: 'Header',
    data() {
      return {
        Mail, Time, Location, Phone,
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
    width: 100vw;
    height: 140px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
          // position: absolute;
          width: 338px;
          height: 61px;
          background-image: url('../../assets/Header/Logo.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }

        &__content {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .icon {
          width: 54px;
          height: 54px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .text {
          display: flex;
          flex-direction: column;
          height: 42px;
          justify-content: space-between;
          font-size: 14px;
          

          >a {
            text-decoration: none;
            color: black;

            &:hover {
              text-decoration: underline;
            }
          }
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
              color: #E64243;
            }

            &.selected {
              color: #E64243;

              &::after {
                position: absolute;
                left: 0;
                top: calc(100% + 6px);
                content: "";
                width: 100%;
                height: 2px;
                background-color: #E64243;
              }
            }
          }

          .sign-up {
            width: 243px;
            height: 40px;
            background-color: #E64243;
            border-radius: 100px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;

            &:hover {
              background-color: #4D8E4D;
            }
          }
        }
      }
    }
  }
</style>