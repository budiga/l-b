<template>
  <div class="posts-container">
    <h1>b list</h1>
    <ul>
      <li
        v-for="item in 5"
      >
        b-{{item}}
      </li>
    </ul>
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',
  async asyncData (ctx) {
    console.log('====asyncData====')
    // called every time before loading the component
    const cats = await ctx.$axios.$get('http://localhost:3000/api/getCategory')
    console.log('====asyncData====', cats)
    return { cats }
  },
  mounted() {
    console.log('====mounted====')
  }
})
</script>

<style lang="scss" scoped>
.posts-container {
}
</style>
