const router = require('koa-router')()
const perf = require('../controller/perf');

router.prefix('/api');

/*获取分类接口*/
router.get('/getCategory', perf.getCategory);

module.exports = router
