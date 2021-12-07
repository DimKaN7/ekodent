<template>
  <div class="footer-container">
    <div class="footer">
      <div class="footer__line"></div>
      <div class="footer__content">
        <div class="footer__links">
          <FooterColumn v-for="(column, index) in footerStrings.columns" :key="index" :column="column"/>
        </div>
        <div class="footer__map">
          <yandex-map :settings="settings" :coords="coords" style="width: 100%; height: 100%;" :zoom="17">
            <ymap-marker marker-type="Placemark" :marker-id="0" :coords="coords" hint-content="Экодент"/>
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterColumn from './FooterColumn';
import { footerStrings } from '../../tools/strings';

import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { mapGetters } from 'vuex';

export default {
  name: 'Footer',
  components: {
    FooterColumn, yandexMap, ymapMarker
  },
  data() {
    return {
      footerStrings,
      settings: {
        apiKey: '4fd41365-d50e-4f83-992f-489bc1236f71',
      },
      coords: [52.280864154504464, 104.31581467800731]
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  }
}
</script>

<style lang="scss">
.footer-container {
  width: 100%;
  height: 503px;
  display: flex;
  justify-content: center;

  .footer {
    width: 1267px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 99px;

    &__line {
      width: 638px;
      height: 5px;
      background-color: #4D8E4D;
      margin-bottom: 61px;
    }

    &__content {
      width: 100%;
      flex: 1 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__links {
      width: 660px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__map {
      flex: 1 0 auto;
      margin-left: 20px;
    }
  }
}
</style>