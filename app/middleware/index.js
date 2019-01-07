const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticResource = require('koa-static')

// 引入日志中间件
const logger = require('./logger')

module.exports = (app) => {
    // 注册日志中间件
    app.use(logger())
    // 注册日志中间件   
    app.use(staticResource(path.resolve(__dirname, "../public")))
    // 注册模板解析中间件
    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }));
    // 注册body解析中间件
    app.use(bodyParser())
}