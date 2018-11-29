# サイト概要
ポートフォリオサイトです。

# サイトマップ
- top
- about
- work(contentfulからコンテンツ取得)
- note(noteから一覧取得)
- contact(Googleフォーム等)

# 画面イメージ
下記Overflowをご確認ください。
https://overflow.io/s/73L4BC/


## セットアップ方法

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev
```

# CSSフレームワーク導入
Bulma導入してます。

# add bulma
``` bash
$ yarn add bulma
$ yarn add sass-loader node-sass --dev
```

nuxt.config.js にcss設定を追記。

``` bash
nuxt.config.js
module.exports = {
 /*
  ** Include css not in components
  */
  css: [
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ]
}
```

# add vue-markdown
マークダウン 利用できるようにしています。 
``` bash
$ yarn add vue-markdown
```

# contentfulとの連携
``` bash
$ yarn add contentful
$ yarn add dotenv
```

# 注意点
- envファイルについて
Contentfulとの連携で.envファイルを作成する必要があります。
envファイルに記載する内容は直接お伝えしますのでご連絡ください。

- Contentfulについて
Contentfulの権限は別途お渡ししますのでこちらもご連絡ください。