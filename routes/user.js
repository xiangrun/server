const Router = require('koa-router');
const router = new Router({
    prefix: "/users"
}); //加路由前缀
//引入业务逻辑
const Users = require("../controllers/users");


router.get('/list', Users.list);
router.post('/create', Users.create);
router.delete('/destory/:id', Users.delete);
router.post('/update', Users.update);
router.get('/details', Users.details);

module.exports = router;