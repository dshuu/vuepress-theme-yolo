<template>
  <div class="blog-list">
    <ul>
      <li v-for="(item,index) in list" :key="`index_${index}`">
        <a :href="item.path">{{item.title}}</a>
      </li>
    </ul>
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
  created() {
    console.log('postlist conponents info===>', this)
  }
}
</script>

