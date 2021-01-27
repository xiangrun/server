const Router = require('koa-router');
const router = new Router({
    prefix: "/blogs"
}); //加路由前缀
//引入业务逻辑
const blogs = require("../controllers/blogs");


router.get('/list', blogs.list);


module.exports = router;