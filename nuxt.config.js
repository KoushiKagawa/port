const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_PAGE_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const config = {
  head: {
    title: 'nuxt_page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    css: [
      '@fortawesome/fontawesome-free-webfonts',
      '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
      '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
      '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]

  },

  loading: { color: '#3B8070' },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  plugins: [ { src: '~plugins/contentful' } ],

  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_PAGE_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/page/${entry.fields.path}`)
        ]
      })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PAGE_TYPE_ID: ctfConfig.CTF_PAGE_TYPE_ID
  }
}

module.exports = {
  /*
   ** Include css not in components
   */
   css: [
     // node.js module but we specify the pre-processor
     { src: '~assets/main.scss', lang: 'scss' }
     // { src: 'bulma/bulma.sass', lang: 'sass' }
   ]
 }