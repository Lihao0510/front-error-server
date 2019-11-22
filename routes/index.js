const router = require("koa-router")();
const AppService = require('../service/AppService');

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Yiautos Front Error Catcher!",
    version: 'v1.0.0'
  });
});

router.get("/create", async (ctx, next) => {

  const [rows, fields] = await AppService.createApp({
    name: '宜买车官网',
    type: 1,
    owner_email: 'lih@itsmycar.cn'
  });

  console.log('插入结果 ==>', rows);

  ctx.body = {
    message: 'success',
    data: rows.insertId,
    code: 200,
  };
});

router.get("/json", async (ctx, next) => {

  const [rows, fields] = await AppService.getAppList();

  console.log('获取的App列表 ==>', rows, fields);

  ctx.body = {
    message: 'success',
    data: rows,
    code: 200,
  };
});

module.exports = router;
