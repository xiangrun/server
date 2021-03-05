const Router = require('koa-router');
const router = new Router({
    prefix: "/blogs"
}); //加路由前缀
//引入业务逻辑
const blog = require("../controllers/blog");


router.post('/list', blog.list);
router.post('/create', blog.create);
router.get('/delete/:id', blog.delete);
router.post('/update', blog.update);
router.get('/query/:id', blog.query);


module.exports = router;