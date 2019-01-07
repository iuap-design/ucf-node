const Koa = require('koa')
const app = new Koa()

const router = require('./router')
const middleware = require('./middleware')

// const port = process.env.port || 3000

router(app)
middleware(app)

app.listen(3000, () => {
    console.log('服务运行在 http://localhost:3000')
})