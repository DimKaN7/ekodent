<template>
  <div>
    <div class="sign-up" @click="showModal">ЗАПИСАТЬСЯ НА ПРИЕМ</div>
    <b-modal @hide="hideModal" ref="my-modal" hide-footer hide-header title="Using Component Methods">
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
import { mapActions } from 'vuex'
export default {
  name: "SignUp",
  methods: {
    ...mapActions([
      'setSignUpVisible'
    ]),
    showModal() {
      this.setSignUpVisible(true)
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.setSignUpVisible(false)
      this.$refs['my-modal'].hide()
    },
  }
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