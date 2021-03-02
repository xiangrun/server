const Router = require('koa-router');
const jwt = require('koa-jwt')
const { secret } = require('../config/secret')
const router = new Router({
    prefix: "/users"
}); //加路由前缀
//引入业务逻辑
const { login, register, changeInfo, deleteCurUser, userList } = require('../controllers/user')
const { genValidator } = require('../middlewares/validator')
const userValidate = require('../validator/user')
//校验token
const auth = jwt({ secret })

router.post('/login', login);
router.post('/register', genValidator(userValidate), register);
router.post('/update', auth, changeInfo);
router.get('/delete/:id', auth, deleteCurUser);
router.post('/list', userList)


module.exports = router;