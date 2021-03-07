const Koa = require('koa');
const app = new Koa()
const routing = require('./routes')
const path = require('path')
const parmeter = require('koa-parameter') //解析参数
const koaBody = require('koa-body');
const redisStore = require('koa-redis')
const { REDIS_CONF } = require('./config/db')
const cors = require('koa2-cors')

app.use(parmeter(app))
app.use(koaBody({
    multipart: true,
    maxFieldsSize: 5 * 1024 * 1024,
}))

app.use(cors({
    origin: (ctx) => {
        return "*";
    },
    credentials: !0
}))

//批量注册路由
routing(app)


app.listen(5000)