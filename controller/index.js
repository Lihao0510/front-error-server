const router = require("koa-router")();
const AppService = require('../service/AppService');

//渲染服务器首页,用来展示运行成功
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Yiautos Front Error Catcher!",
    version: 'v1.0.0'
  });
});

router.get("/create", async (ctx, next) => {

  ctx.body = await AppService.createApp({
    name: '宜买车官网',
    type: 1,
    owner_email: 'lih@itsmycar.cn'
  });
});

router.get("/json", async (ctx, next) => {
  ctx.body = await AppService.getAppList();
});

module.exports = router;
