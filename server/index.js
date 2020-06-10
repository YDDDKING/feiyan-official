const Koa = require('koa')
const consola = require('consola')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const cors = require('koa2-cors')
const { Nuxt, Builder } = require('nuxt')
const static = require('koa-static')

// const banner = require('./interface/banner')
// const dynamic = require('./interface/dynamic')
// const message = require('./interface/message')
// const manage = require('./interface/manage')
const app = new Koa()

console.log('测试执行');


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

app.use(cors())
app.use(static(__dirname, '../static'))

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text', 'raw']
}))
app.use(json())
app.proxy = true
app.use(logger())

async function start () {
  // Instantiate nuxt.js
  console.log(__dirname);
  
  
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3001
  } = nuxt.options.server

  

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // app.use(banner.routes()).use(banner.allowedMethods())
  // app.use(dynamic.routes()).use(dynamic.allowedMethods())
  // app.use(message.routes()).use(message.allowedMethods())
  // app.use(manage.routes()).use(manage.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
 