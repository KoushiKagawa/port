<template>
  <li class="post">
    <span class="title"><a :href="post.url">{{post.title}}</a></span>
    <span class="created">{{ post.created_at | formatTime }}</span>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import moment from "moment"

@Component({
  filters: {
    formatTime: function(time: string): string {
      return moment(time).format('MMMM Do YYYY, h:mm:ss')
    }
  }
})
export default class Post extends Vue {
  @Prop() post
}
</script>