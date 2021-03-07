const Router = require('koa-router');
const router = new Router({
    prefix: "/uploads"
}); //加路由前缀
const { uploadFile, uploadFiles } = require('./../controllers/upload')

router.post('/upload', uploadFile);
router.post('/uploads', uploadFiles);


module.exports = router;