const router = require("koa-router")();
const AppService = require('../service/AppService');

router.prefix("/app");


router.post("/", async (ctx, next) => {
  ctx.body = await AppService.createApp(ctx.request.body);
});

router.get("/", async (ctx, next) => {
  ctx.body = await AppService.getAppList();
});

router.put("/:appId", async (ctx, next) => {
  ctx.body = await AppService.updateApp(ctx.params.appId, ctx.request.body);
});

router.delete("/:appId", async (ctx, next) => {
  ctx.body = await AppService.deleteApp(ctx.params.appId);
});

module.exports = router;
