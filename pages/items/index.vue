<template>
  <section class="index">
    <card v-for="post in posts"
      v-bind:key="post.fields.path"
      :title="post.fields.title"
      :path="post.fields.path"
      :image="post.fields.image"
      />
  </section>
</template>

<script>
import Card from '~/components/card.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    Card
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>

<style scoped>
.index {
  display: flex;
  flex-wrap: wrap;
}
</style>