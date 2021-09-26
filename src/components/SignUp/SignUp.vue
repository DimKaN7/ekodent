<template>
  <div>
    <div class="sign-up" @click="showModal">ЗАПИСАТЬСЯ НА ПРИЕМ</div>
    <b-modal ref="my-modal" hide-footer hide-header title="Using Component Methods">
      <div class="make-appointment">
        <div class="text-center">
          <div class="make-appointment__title">
            ЗАПИСАТЬСЯ НА ПРИЕМ
          </div>
          <div class="make-appointment__line">
          </div>
        </div>
        <div class="make-appointment__text">
          Администратор клиники с радостью ответит на ваши вопросы и запишет к нужному специалисту.
        </div>
        <div class="make-appointment__form">
          <input type="hidden" name="formData" value="Обратная связь сайта Ekodent">
          <input class="make-appointment__input w-100 mt-3" name="name" placeholder="Имя" type="text">
          <input class="make-appointment__input w-100 mt-3" name="phone" placeholder="Телефон" type="tel">
          <input class="make-appointment__input w-100 mt-3" name="email" placeholder="E-mail" type="email">
        </div>
        <div class="make-appointment__info">
          Отправляя данную форму, я подтверждаю свое согласие с политикой обработки персональных данных.
        </div>
        <div class="make-appointment__button justify-content-center  align-items-center d-flex" @click="sendForm">
          Отправить
        </div>
        <div class="make-appointment__info text-center">
          Мы постараемся ответить Вам в течение 1 рабочего дня. Для получения экстренной помощи звоните по телефонам:
          +7 (3952) 252-712; +7 (3952) 251-651
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    sendForm(){
      alert(123);
    }
  },
}

</script>

<style lang="scss">


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

</style>