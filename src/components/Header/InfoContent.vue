<template>
  <div class="info-content">
    <div class="icon" :style="{backgroundImage: `url(${icon})`}"></div>
    <div v-if="hrefs.length > 0" class="text" :style="{justifyContent: texts.length > 1 ? 'space-between' : 'center'}">
        <a v-for="(h, index) in hrefs" :key="index" :href="h" :style="styles">{{texts[index]}}</a>
    </div>
    <div v-else class="text" :style="{justifyContent: texts.length > 1 ? 'space-between' : 'center'}">
        <div v-for="t in texts" :key="t" :style="styles">{{t}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoContent', 
  props: {
    icon: {
      type: String,
      required: true,
    },
    texts: {
      type: Array,
      required: true,
    },
    hrefs: {
      type: Array,
    },
    styles: {
      type: String,
    },
  }
}
</script>

<style lang="scss">
.info-content {
  display: flex;
  flex-direction: row;
  align-items: center;

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
    font-size: 14px;

    >a {
      text-decoration: none;
      color: $bgblack;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>