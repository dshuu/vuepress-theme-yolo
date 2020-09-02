<template>
  <section class="blog-list wrapper">
    <ul>
      <li class="post" v-for="(item,index) in list" :key="`index_${index}`">
        <!-- <time>item</time> -->
        <a :href="item.path">
          <span>{{item.title}}</span>
          <span class="post-tag">{{item.frontmatter.tag}}</span>
        </a>

      </li>
    </ul>
  </section>
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
    // console.log('postlist conponents info===>', this)
  }
}
</script>

