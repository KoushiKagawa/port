<template>
      <!-- 
  <div>
    <ul>
      <li v-for="item in data">
        
        <a v-bind:href="item.link">
          {{item.title}}
        </a>
        {{item}}
      </li>
    </ul>
  </div>
        -->

        <section class="index">
          <article class="card" v-for="item in data">
            <!-- <nuxt-link v-bind:to="{ name: 'items-path', params: { path: path }}" class="wrapper"> -->
            <!--<img class="card_image" v-bind:src="{{item}}"/>-->
            <h1 class="card_title"><a v-bind:href="item.link">{{item.title}}</a></h1>
            </nuxt-link>
            {{item}}
          </article>
        </section>

</template>

<script>
  import axios from 'axios'


  export default {
    asyncData ({params}, callback) {
      axios.get(`https://note.mu/koushikagawa/rss`)
        .then((res) => {
          var parseString = require('xml2js').parseString
          var xml = res.data
          parseString(xml, (message, xmlres) => {
            callback(null, {data: xmlres.rss.channel[0].item})
          })
        })
        .catch((e) => {
          callback({ statusCode: 404, message: 'ページが見つかりません' })
        })
    }
  }


</script>

<style scoped>
.index {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 360px;
  /*width: 28%;*/
  /*height: 200px;*/
  /*box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.2);*/
  /*border: 0.5px solid rgb(57, 72, 85);*/
  padding: 10px 20px;
  margin: 10px 10px;
  text-align: center;
}
.wrapper {
  text-decoration: none;
}
.card_title {
  font-size: 1.2rem;
}
.card_date {
  font-size: 0.7rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
.card_image {
  max-height: 100px;
}
</style>