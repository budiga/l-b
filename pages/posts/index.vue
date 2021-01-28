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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',
})
</script>

<style lang="scss" scoped>
.posts-container {
}
</style>
