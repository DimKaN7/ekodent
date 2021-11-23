<template>
    <div
        data-aos="fade-down"
        data-aos-duration="300"
        :class="['header-container', scrolled && 'scrolled']" >
      <div class="header">
        <b-alert
            :show="dismissCountDown"
            fade
            variant="danger"
            @dismiss-count-down="countDownChanged" class="position-absolute  top-50 start-50 translate-middle alert-custom"
        >
          По техническим причинам 21 декабря мы не работаем! Просим прощение за неудобство!
        </b-alert>
        <div class="info">
          <a class="info__logo" href="#"></a>
          <InfoContent v-for="(i, index) in icons" :key="index" :icon="i" :texts="headerStrings[index].texts"
            :hrefs="headerStrings[index].hrefs" :styles="index === 3 ? 'font-weight: 500; font-size: 18px;' : ''"/>
        </div>

        <div class="menu">
          <div class="">
            <div class="menu-details dropdown dropbtn">
              <div class="menu-details-item">
                <div class="menu-details-block">
                  <div v-for="(item, index) in additionalMenuItems" :key="item" @click="$router.push(additionalMenuUrl[index])">
                    {{item}}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="menu-items">

            <div :class="['menu-items__item', (index === selectedItem) && 'selected']" v-for="(item, index) in menuItems" :key="item" @click="$router.push(menuUrl[index])">
              {{item}}
            </div>
            <div class="sign-up" @click="showModal">ЗАПИСАТЬСЯ НА ПРИЕМ</div>
          </div>
        </div>
      </div>
      <b-modal ref="my-modal" hide-footer hide-header title="Using Component Methods">
        <div class="make-appointment">
          <form action="../../feedback.php" method="POST">
            <div class="text-center">
              <div class="make-appointment__title">
                ЗАПИСАТЬСЯ НА ПРИЕМ
              </div>
              <div class="make-appointment__line">
              </div>
            </div>
            <div class="make-appointment__text">
              Администратор ответит на все Ваши вопросы и запишет на прием к специалисту.
            </div>
            <div class="make-appointment__form">
              <input type="hidden" name="formData" value="Обратная связь сайта Ekodent">
              <input class="make-appointment__input w-100 mt-3" name="name" placeholder="Имя" type="text">
              <input class="make-appointment__input w-100 mt-3" name="phone" placeholder="Телефон" type="tel">
              <input class="make-appointment__input w-100 mt-3" name="email" placeholder="E-mail" type="email">
              <input type="hidden" name="formData" value="Заявка с сайта">
            </div>
            <div class="make-appointment__info">
              Отправляя данную форму, я подтверждаю свое согласие с политикой обработки персональных данных.
            </div>
            <button class="make-appointment__button justify-content-center  align-items-center d-flex" type="submit" name="sendMail">
              Отправить
            </button>
            <div class="make-appointment__info text-center">
              Для получения экстренной помощи звоните по телефонам:
              +7 (3952) 252-712; +7 (3952) 251-651
            </div>
          </form>
        </div>
      </b-modal>
    </div>
</template>

<script>
import Mail from '../../assets/Header/Mail.png';
import Time from '../../assets/Header/Time.png';
import Location from '../../assets/Header/Location.png';
import Phone from '../../assets/Header/Phone.png';
import Details from '../../assets/Header/Details.png';

import InfoContent from './InfoContent';
import {headerStrings} from '../../tools/strings';

export default {
  name: 'Header',
  components: {
    InfoContent,
  },
  props: {
    scrolled: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      icons: [Mail, Time, Location, Phone],
      headerStrings,
      menuItems: [
        'Главная', 'О клинике', 'Цены', 'Услуги', 'Врачи', 'Отзывы', 'Вопросы'
      ],
      menuUrl: [
        '/', '/About', '/Price', '/Services/Therapy', '/Doctors', '/Feedback', '/Questions'
      ],
      additionalMenuItems: [
        'Лицензия', 'Вакансии', 'Новости', 'Акции'
      ],
      additionalMenuUrl: [
        '/Certificates', '/Vacancies', '/News', '/Stocks'
      ],
      selectedItem: null,
      Details,
      dismissSecs: 8,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    sendForm(){

    }
  },
  // TODO Сделал инвалидно, нужно исправить и делать это дело одним методом (Или же вообще без их использования)
  watch:{
    $route: function(to) {
      this.menuUrl.forEach((el, index) => {
        if (el === to['fullPath']){
          this.selectedItem =  index;
        }
      });
      window.scrollTo({
        top: 0,
      })
    }
  },
  mounted(){
    this.menuUrl.forEach((el, index) => {
      if (el === this.$route.fullPath){
        this.selectedItem =  index;
      }
    });
    this.showAlert();
  }
}
</script>

<style lang="scss">

.alert-custom{
  z-index: 100;
}

.make-appointment{
  padding: 35px;


  &__title{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }

  &__line{
    background: #4D8E4D;
    height: 2px;
    width: 144.13px;
    margin: 20px auto 20px auto;
  }

  &__text{
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  &__input {
    border: 0;
    border-bottom: 1px solid;
    border-color: #4D8E4D;
  }
  &__info {
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }
  &__button{
    width: 225px;
    height: 40px;
    background: #E64243;
    color: white;
    border-radius: 100px;
    display:table-cell;
    vertical-align:middle;
    margin: auto;
    &:hover {
      background-color: #4D8E4D;
      cursor: pointer;
    }
  }

}

.menu-details{
  margin-top: 25px;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  background: url('../../assets/Header/Details.png');
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
}

.menu-details-item{
  display: none;
  //position: absolute;
  min-width: 160px;
  z-index: 9;
  margin-top: 44px;
  position: absolute;
  width: 250px;
  height: 120px;
}

.menu-details-item a {
  color: black;
  text-decoration: none;
  flex-flow: column;
  justify-content: space-evenly;
  flex-grow: 2;
  text-align: left;
  z-index: 3;
  display: block;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.menu-details-item a:hover {
  text-decoration-line: underline;
  color: #E64243;
}
.dropdown:hover .menu-details-item {
  display: block;
}

.menu-details-block{
  padding: 10px;
  background: #F0F0F0;
  border-right:  2px solid #4D8E4D;
  border-bottom: 2px solid #4D8E4D;
  border-left:   2px solid  #4D8E4D;
  box-sizing: border-box;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  >div {
    &:hover {
      cursor: pointer;
      color: #E64243;
    }
  }
}

.header-container {
  width: 100%;
  height: 140px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  &.scrolled {
    transform: translateY(-84px) !important;
  }

  .header {
    width: 1267px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .info {
      width: 100%;
      height: 84px;
      flex: 0 0 84px;
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
      height: 56px;
      flex: 0 0 56px;
      display: flex;
      flex-direction: row;
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
          user-select: none;

          &:hover {
            background-color: #4D8E4D;
          }
        }
      }
    }
  }
}
</style>