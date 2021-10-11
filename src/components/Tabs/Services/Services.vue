<template>
  <div class="services-tab__container">
    <div class="row">
      <div class="col-3">
        <b-nav vertical class="services-tab-navbar">
          <b-nav-item to="/Services/Therapy" :active='$route.name =="Therapy"' href="#my-nav-dropdown">Терапия (Лечение зубов)</b-nav-item>
<!--          <b-nav-item class="sub-nav" to="/Services/Restoration" :active='$route.name =="Restoration"'>Реставрация</b-nav-item>-->
<!--          <b-nav-item class="sub-nav" to="/Services/PersonalCleaning" :active='$route.name =="PersonalCleaning"'>Профессиональная чистка</b-nav-item>-->
<!--          <b-nav-item to="/Services/DentalImplantation" :active='$route.name =="DentalImplantation"'>ДЕНТАЛЬНАЯ ИМПЛАНТАЦИЯ</b-nav-item>-->
          <b-nav-item to="/Services/Periodontics" :active='$route.name =="Periodontics"'>Пародонтология(Лечение десен)</b-nav-item>
<!--          <b-nav-item to="/Services/Gingivitis" :active='$route.name =="Gingivitis"' class="sub-nav">Лечение и профилактика гингвинита</b-nav-item>-->
<!--          <b-nav-item to="/Services/Periodontitis" :active='$route.name =="Periodontitis"' class="sub-nav">Лечение и профилактика пародонтита</b-nav-item>-->
          <b-nav-item to="/Services/ChildrenDentistry" :active='$route.name =="ChildrenDentistry"' >Детская стоматология</b-nav-item>
          <b-nav-item to="/Services/Surgery" :active='$route.name =="Surgery"'>Хирургия</b-nav-item>
<!--          <b-nav-item to="/Services/ToothRemoval" :active='$route.name =="ToothRemoval"' class="sub-nav">Удаление зубов</b-nav-item>-->
          <b-nav-item to="/Services/Prosthetics" :active='$route.name =="Prosthetics"'>Ортопедия</b-nav-item>
<!--          <b-nav-item to="/Services/Physiotherapy" :active='$route.name =="Physiotherapy"'>ФИЗИОЛЕЧЕНИЕ</b-nav-item>-->
          <b-nav-item to="/Services/Orthodontics" :active='$route.name =="Orthodontics"'>Ортодонтия (Исправление прикуса)</b-nav-item>
<!--          <b-nav-item to="/Services/Braces" :active='$route.name =="Braces"' class="sub-nav">Брекеты</b-nav-item>-->
<!--          <b-nav-item to="/Services/RemovableStructures" :active='$route.name =="RemovableStructures"' class="sub-nav">Съемные конструкции</b-nav-item>-->
<!--          <b-nav-item to="/Services/SurgicalMethods" :active='$route.name =="SurgicalMethods"'>Хирургические методы</b-nav-item>-->
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