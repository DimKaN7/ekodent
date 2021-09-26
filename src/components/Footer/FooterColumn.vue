<template>
  <div class="footer-column">
    <div class="title">{{column.title}}</div>
    <div v-for="(c, index) in column.content" :key="index" :type="c.type" @click="$router.push(c.href)">{{c.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'FooterColumn',
  props: {
    column: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.footer-column {
  display: flex;
  flex-direction: column;

  .title {
    text-transform: uppercase;
    margin-bottom: 23px;
  }

  >div {
    margin-bottom: 18px;
    text-decoration: none;
    outline: none;
    color: black;
    transition: color 0.3s ease-out;
    max-width: 201px;
    word-wrap: break-word;

    &:hover {
      cursor: pointer;
      color: #E64243;
    }
  }
}
</style>