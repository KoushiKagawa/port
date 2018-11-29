<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item"><nuxt-link to="/">ポートフォリオサイト</nuxt-link></div>
      <div class="navbar-burger" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div><!-- navbar-brand END -->
    <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">トップ</nuxt-link>
        <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/work" class="navbar-item">Work</nuxt-link>
        <nuxt-link to="/note" class="navbar-item">note</nuxt-link>
      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>