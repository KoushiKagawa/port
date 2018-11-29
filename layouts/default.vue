<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, sans-serif;
  font-size: 16px;
}
h1, h2, h3 {
  font-weight: normal;
}
.title {
  color: #35495e;
  margin: 100px 0 30px;
  text-align: center;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>