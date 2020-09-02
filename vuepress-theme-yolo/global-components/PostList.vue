<template>
  <div class="blog-list">
    <div v-for="(item, index) in list" :key="`index_${index}`">
      {{ item.frontmatter.title }} 12
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  created() {
    console.log("this===>");
  },
};
</script>

<style lang="stylus" scoped>
</style>
