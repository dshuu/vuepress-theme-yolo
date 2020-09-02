<template>
  <div class="theme-container">
    <PostList :list="posts" />
  </div>
</template>


<script>
import PostList from '../components/PostList'

export default {
  components: { PostList },
  computed: {
    posts() {
      // 只获取post文件夹下的，作为博文列表
      return this.$site.pages.filter(item => {
        return /post/.test(item.path)
      })
    }
  },
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // created() {
  //   console.log('created')
  // },
  // beforeMount() {
  //   console.log('beforeMount')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate')
  // },
  // updated() {
  //   console.log('updated')
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy')
  // },
  // destroyed() {
  //   console.log('destroyed')
  // }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>