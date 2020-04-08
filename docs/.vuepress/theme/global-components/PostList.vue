<template>
  <div class="blog-list">
    <div v-for="(item,index) in list" :key="`index_${index}`">{{item.frontmatter.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  created(){
    console.log('this===>',this)
  }
}
</script>

