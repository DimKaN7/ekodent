<template>
  <div class="burger" @mouseenter="onEnter" @mouseleave="onLeave" @click="onClick">
    <div class="burger__menu">
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'Menu',
  computed: {
    ...mapState([
      'submenuVisible'
    ]),
    ...mapGetters([
      'isMobile',
    ]),
  },
  methods: {
    ...mapActions([
      'setSubmenuVisible'
    ]),
    onEnter() {
      if (!this.isMobile) {
        this.setSubmenuVisible(true)
      }
    },
    onLeave() {
      if (!this.isMobile) {
        this.setSubmenuVisible(false)
      }
    },
    onClick() {
      if (this.isMobile) {
        this.setSubmenuVisible(true)
      }
    }
  }
}
</script>

<style lang='scss'>
.burger {
  width: 32px;
  height: 100%;
  margin-right: 34px;
  display: flex;
  align-items: center;
  flex: 1 0 32px;

  &__menu {
    width: 100%;
    height: 19px;
    border-top: 2px solid #E64243;
    border-bottom: 2px solid #E64243;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    >div {
      width: 22px;
      height: 2px;
      background-color: #E64243;
    }
  }
}

@media (max-width: 1286px) {
  .burger {
    margin-right: 0px;
    flex: 0 0 32px;
  }
}
</style>