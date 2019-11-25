const router = require("koa-router")();
const UserService = require("../service/UserService");

router.prefix("/users");

router.get("/", function(ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.get("/login", async function(ctx, next) {
  const loginResult = await UserService.login("17786123214", "123456");
  console.log('LoginResult =>', loginResult);
  ctx.body = loginResult;
});

module.exports = router;
