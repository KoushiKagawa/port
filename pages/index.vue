<template>

  <section class="container bg-img">
    
    <div>
      <app-logo/>
      <h1 class="title">
        <!--素敵なPM-->
        ポートフォリオサイト
      </h1>
      
      <!-- <img src="/images/sutekare.jpg"/> --> 

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.bg-img {
        /*background-image: url(/images/sutekare.jpg);
        */
        background-image: url(/images/836x1200.png);
        /*
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: #999;
        */
        width:100%;
        height:100%;
        background-size:cover;

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