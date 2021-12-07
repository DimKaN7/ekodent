<template>
  <div class="footer-mobile">
    <span class="footer-mobile__title">{{contacts.title}}</span>
    <div class="footer-mobile__contacts">
      <div>
        <a v-for="(c, index) in contacts.firstColumn" :key="index" :type="c.type" :href="c.href">{{c.title}}</a>
      </div>
      <div>
        <a v-for="(c, index) in contacts.secondColumn" :key="index" :type="c.type" :href="c.href">{{c.title}}</a>
      </div>
    </div>
    <div class="footer-mobile__map">
      <yandex-map :settings="settings" :coords="coords" style="width: 100%; height: 100%;" :zoom="17">
        <ymap-marker marker-type="Placemark" :marker-id="0" :coords="coords" hint-content="Экодент"/>
      </yandex-map>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import { footerStrings } from '../../tools/strings'
// import FooterColumn from './FooterColumn.vue'

export default {
  name: 'FooterMobile',
  components: {
    yandexMap, ymapMarker, 
    // FooterColumn
  },
  data() {
    return {
      footerStrings,
      settings: {
        apiKey: '4fd41365-d50e-4f83-992f-489bc1236f71',
      },
      coords: [52.280864154504464, 104.31581467800731],
    }
  },
  computed: {
    contacts() {
      return {
        title: this.footerStrings.columns[2].title,
        firstColumn: [ 
          this.footerStrings.columns[2].content[3], 
          this.footerStrings.columns[2].content[4] 
        ],
        secondColumn: [
          this.footerStrings.columns[2].content[0], 
          this.footerStrings.columns[2].content[1],
          this.footerStrings.columns[2].content[2]
        ]
      }
    }
  }
}
</script>

<style lang='scss'>
.footer-mobile {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding-top: 35px;
  align-items: center;

  &__title {
    text-transform: uppercase;
  }

  &__contacts {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 29px 23px 0px;

    >div {
      display: flex;
      flex-direction: column;

      &:first-child {
        flex: 1 0 160px;
      }

      >a {
        margin-bottom: 10px;
        text-decoration: none;
        color: #000;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &__map {
    margin-top: 54px;
    flex: 1 0 auto;
  }
}
</style>