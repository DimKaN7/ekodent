<template>
  <div class="services-tab__container">
    <div class="row">
      <div class="col-3">
        <b-nav vertical class="services-tab-navbar">
          <b-nav-item to="/Services/Therapy" active href="#my-nav-dropdown">Терапия (Лечение зубов)</b-nav-item>
          <b-nav-item class="sub-nav" to="/Services/Restoration" :active='$route.name =="Restoration"'>Реставрация</b-nav-item>
          <b-nav-item class="sub-nav">Профессиональная чистка</b-nav-item>
          <b-nav-item>ДЕНТАЛЬНАЯ ИМПЛАНТАЦИЯ</b-nav-item>
          <b-nav-item>ПАРАДОНТОЛОГИЯ(Лечение десен)</b-nav-item>
          <b-nav-item class="sub-nav">Лечение и профилактика гингвинита</b-nav-item>
          <b-nav-item class="sub-nav">Лечение и профилактика пародонтита</b-nav-item>
          <b-nav-item>ДЕТСКАЯ СТОМАТОЛОГИЯ</b-nav-item>
          <b-nav-item>ХИРУРГИЯ</b-nav-item>
          <b-nav-item class="sub-nav">Удаление зубов</b-nav-item>
          <b-nav-item class="sub-nav">Основные услуги</b-nav-item>
          <b-nav-item>ПРОТЕЗИРОВАНИЕ</b-nav-item>
          <b-nav-item>ФИЗИОЛЕЧЕНИЕ</b-nav-item>
          <b-nav-item>ОРТОДОНТИЯ (Исправление прикуса)</b-nav-item>
          <b-nav-item class="sub-nav">Брекеты</b-nav-item>
          <b-nav-item class="sub-nav">Съемные конструкции</b-nav-item>
          <b-nav-item>Хирургические методы</b-nav-item>
        </b-nav>
      </div>
      <div class="col-9">
      <div class="services-tab-info">
        <router-view></router-view>
      </div>
      </div>


    </div>
  </div>
</template>

<script>
import {servicesTabStrings} from '../../../tools/strings';

export default {
  name: "Services",
  data() {
    return {
      servicesTabStrings,
    }
  }
}
</script>

<style scoped>

.services-tab__container{
  flex-wrap: inherit;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  padding: 167px 5% 0 5%;
}

.services-tab-navbar{
  width: 376px;
  height: 100%;
}

.services-tab-navbar .nav-link{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
}

.services-tab-navbar .nav-item .router-link-active{
  color: #E64243;
}

.services-tab-info{
  width: 100%;
  height: 100%;
}

.sub-nav{
  padding-left: 4px;
}

</style>