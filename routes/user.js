const Router = require('koa-router');
const router = new Router({
    prefix: "/users"
}); //加路由前缀
//引入业务逻辑
const { login, register } = require('../controllers/user')


router.post('/login', login);
router.post('/register', register);


module.exports = router;