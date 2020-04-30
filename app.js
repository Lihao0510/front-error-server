const Koa = require('koa');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();

const index = require('./controller/app');
const users = require('./controller/users');
const error = require('./controller/error');

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
);
app.use(json());
app.use(logger());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// controller
// app.use(users.routes(), users.allowedMethods());
app.use(index.routes());
app.use(users.routes());
app.use(error.routes());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error ==>', err, ctx);
});

module.exports = app;
