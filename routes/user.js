const Router = require('koa-router');
const jwt = require('koa-jwt')
const { secret } = require('../config/secret')
const router = new Router({
    prefix: "/users"
}); //加路由前缀
//引入业务逻辑
const { login, register } = require('../controllers/user')

//校验token
const auth = jwt({ secret })

router.post('/login', login);
router.post('/register', register);


module.exports = router;