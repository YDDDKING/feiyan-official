// import colors from 'vuetify/es5/util/colors'
const colors = require('vuetify/es5/util/colors').default

// export default {
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '广州凤腾阁科技有限公司',
    title: '广州凤腾阁科技有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "keywords", content: "飞燕数学、初中数学、凤腾阁、数学辅导、数学工具、教育、科技、刷题" },
      { hid: 'description', name: 'description', content: '飞燕数学是一款集智能派卷、自动批改、互动讲解、个性测评等功能为一体的新型交互式数学学习工具' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `https://api.map.baidu.com/api?v=2.0&ak=qe0TkeKulWIs0yc7rM69N7UX5zivQK06`, body: true },
    ]
  },
  server: {
    port: 8081, // default: 3000
    host: '127.0.0.1' // default: localhost
    // port: 3001,
    // host: '10.10.100.255'
  },

  router: {
    middleware: ['browserVersion']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/map.js", ssr: false },
    { src: '@/plugins/poly' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  // axios: {
  //   proxy: true, // 表示开启代理
  //   prefix: '/api', // 表示给请求url加个前缀 /api
  //   credentials: true // 表示跨域请求时是否需要使用凭证
  // },
  // proxy: {
  //   '/api': { 
  //     target: 'https://www.feiyanmath.com', // 目标接口域名
  //     pathRewrite: {
  //       '^/api': '/', // 把 /api 替换成 /
  //       changeOrigin: true // 表示是否跨域
  //     }    
  //   }
  // },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    
    vendor: ['axios'] // 为防止重复打包
  }
}
