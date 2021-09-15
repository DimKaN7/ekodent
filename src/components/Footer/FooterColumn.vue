<template>
  <div class="footer-column">
    <div class="title">{{column.title}}</div>
    <a v-for="(c, index) in column.content" :key="index" :href="c.href" :type="c.type">{{c.title}}</a>
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

  >a {
    margin-bottom: 18px;
    text-decoration: none;
    outline: none;
    color: black;
    transition: color 0.3s ease-out;
    max-width: 201px;
    word-wrap: break-word;

    &:hover {
      color: #E64243;
    }
  }
}
</style>