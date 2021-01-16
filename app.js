const Koa = require('koa');
const app = new Koa()
const routing = require('./routes')
const parmeter = require('koa-parameter') //解析参数
const koaBody = require('koa-body');
app.use(parmeter(app))
app.use(koaBody({
    multipart: true,
}))


//批量注册路由
routing(app)


app.listen(5000)