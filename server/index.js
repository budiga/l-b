import  Koa from 'koa'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('koa-bodyparser') // 配置解析post的bodypaser
// const json = require('koa-json') // 美观地输出JSON response

const router = require('./routes/api')
const app = new Koa()

// app.use(json())
app.use(bodyParser())
// 加入路由
app.use(router.routes()).use(router.allowedMethods())

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'


async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host, () => console.log('api服务已启动'))
  consola.ready({
    message: `api服务 listening on http://${host}:${port}`,
    badge: true
  })
}

start()
