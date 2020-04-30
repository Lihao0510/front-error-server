const router = require('koa-router')();

router.prefix('/error');

router.get('/', function (ctx, next) {
  ctx.body = {
    message: 'success',
    code: 200,
    data: []
  };
});

module.exports = router;
