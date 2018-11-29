<template>
  <li class="repository">
    <span class="name"><a :href="repo.html_url">{{repo.name}}</a></span>
    <span class="description">{{repo.description}}</span>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Repository extends Vue {
  @Prop() repo
}
</script>