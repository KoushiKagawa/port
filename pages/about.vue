<template>
  <section class="slug">
    <h1 class="slug_title">
      About
    </h1>
    <p class="slug_date">2018/8/2</p>
 <vue-markdown>
 # 記事の内容
 - あいうえお
   - あ
   - い
   - う
   - え
   - お
 - かきくけこ
 本文本文本文本文本文本文本文本文本文
     </vue-markdown>
  </section>
</template>

<style scoped>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_title {
  font-size: 2.0rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1.0rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
</style>

<script>
 import VueMarkdown from 'vue-markdown'
 export default {
   transition: 'slide-left',
   components: {
     VueMarkdown
   },
    fetch ({store}) {
    store.commit('resetMenu')
  }
 }

 </script>