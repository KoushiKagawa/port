<template>
  <div class="main-back-img">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white-ter">
            _neekoko hoge hoge
          </h1>
          <h3 class="subtitle has-text-grey-lighter">
            渋谷で働くWebエンジニア。猫とコーヒーがあればなんとかなります----->
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .main-back-img {
    background-size: cover;
    background-image: url('~/assets/back-img.jpg');
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    height: 600px;
  }
  .main-back-img::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
  }
  .header-img {
    border-radius: 50%
  }
</style>