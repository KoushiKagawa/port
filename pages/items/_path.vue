<template>
  <section class="path">
    <h1 class="path_title">{{ post.fields.title }}</h1>
    <img class="path_image" v-bind:src="post.fields.image.fields.file.url"/>
    <vue-markdown>{{post.fields.body}}</vue-markdown>

  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    VueMarkdown
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
      'fields.path': params.path,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        post: entries.items[0],
      }
    })
    .catch(console.error)
  }
}
</script>

<style scoped>
.path {
  max-width: 800px;
  margin: 0 auto;
}
.path_title {
  font-size: 2.0rem;
  font-weight: bolder;
}
.path_date {
  font-size: 1.0rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
</style>