<template>
  <section class="post-detail wrapper">
    <article>
      <header>
        <h1 id="post-title">{{ $page.title }}</h1>
        <div class="post-info">
          <span v-if="$frontmatter.date">
            <i class="fa fa-clock-o" aria-hidden="true"></i
            >{{ $frontmatter.date }}</span
          >
          <span>
            <i class="fa fa-tags" aria-hidden="true"></i
            >{{ $frontmatter.tag }}</span
          >
        </div>
      </header>
      <section class="post-content"></section>
      <Content />
    </article>
  </section>
</template>

<script>
export default {
  name: "PostDetail",
  created() {
  },
};
</script>

<style src="../styles/theme.styl" lang="stylus"></style>