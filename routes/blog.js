const Router = require('koa-router');
const router = new Router({
    prefix: "/blogs"
}); //加路由前缀
//引入业务逻辑
const blog = require("../controllers/blog");


router.get('/list', blog.list);


module.exports = router;