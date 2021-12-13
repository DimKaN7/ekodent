<template>
  <div class="submenu__wrapper">
    <div class="submenu" @mouseenter="onEnter" @mouseleave="onLeave" v-if="!isMobile">
      <div class="submenu__item" v-for="(item, index) in items" :key="index" @click="() => onItemClick(item.url)">{{item.title}}</div>
    </div>
    <div class="submenu" v-else>
      <div class="submenu__items">
        <div :class="['submenu__item', (index === selectedItem && 'selected')]" v-for="(item, index) in items" :key="index" @click="() => onItemClick(item.url, index)">{{item.title}}</div>
      </div>
      <div class="submenu__info">
        <div class="sign-up">ЗАПИСАТЬСЯ НА ПРИЕМ</div>
        <div class="location">
          <div class="schedule">
            <span>{{headerStrings.desktop[1].texts[0]}}</span>
            <span>{{headerStrings.desktop[1].texts[1]}}</span>
          </div>
          <div class="address">
            {{headerStrings.desktop[2].texts[1]}}
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="overlay" v-if="isMobile && submenuVisible" @click="onOverlayClick"></div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { headerStrings } from '../../tools/strings'

export default {
  name: 'Submenu',
  props: {
    items: {
      type: Array,
      reqired: true
    }
  },
  data() {
    return {
      headerStrings
    }
  },
  computed: {
    ...mapState([
      'submenuVisible',
      'selectedItem'
    ]),
    ...mapGetters([
      'isMobile'
    ]),
  },
  methods: {
    ...mapActions([
      'setSubmenuVisible',
      'setSelectedItem'
    ]),
    onEnter() {
      this.setSubmenuVisible(true)
    },
    onLeave() {
      this.setSubmenuVisible(false)
    },
    onItemClick(url, index) {
      this.$router.push(url)
      this.setSubmenuVisible(false)
      if (this.isMobile) {
        this.setSelectedItem(index)
      }
    },
    onOverlayClick() {
      this.setSubmenuVisible(false)
    }
  }
}
</script>

<style lang='scss'>
.submenu__wrapper {
  position: absolute;
  width: 205px;
  height: 140px;
  top: 100%;
  left: 0px;
}

.submenu {
  width: 100%;
  height: 100%;
  background-color: #F0F0F0;
  border: 2px solid #4D8E4D;
  border-top: none;
  padding: 23px 5px;
  border-radius: 0 0px 10px 10px;
  z-index: 2;

  &__item {
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 14px;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
    line-height: 1 !important;

    &:last-child {
      margin-bottom: 0px;
      cursor: pointer;
    }

    &:hover {
      color: #E64243;
      text-decoration: underline;
    }
  }
}

@media (max-width: 1286px) {
  .submenu__wrapper {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding-top: 5px;

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .submenu {
    width: 357px;
    height: 540px;
    padding-top: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: none;
    padding-bottom: 0;

    &__info {
      width: 100%;
      flex: 0 0 auto;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 15px;

      .sign-up {
        flex: 1 0 auto;
      }

      .location {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        font-size: 13px;

        .schedule {
          flex: 1 0 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .address {
          flex: 1 0 50%;
          height: 100%;
          text-align: center;
        }
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__item {
      margin-bottom: 19px;

      &.selected {
        color: #E64243;
      }
    }

    .location {
      margin-top: 25px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>