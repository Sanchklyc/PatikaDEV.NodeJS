const Koa = require("koa");
const Router = require("koa-router");
const port = 3000;
const app = new Koa();
const router = new Router();

router.get("/index", (ctx, next) => {
  ctx.body = "<h1> Hello from Index page </h1>";
});
router.get("/about", (ctx, next) => {
  ctx.body = "<h1> Hello from About page </h1>";
});
router.get("/contact", (ctx, next) => {
  ctx.body = "<h1> Hello from Contact page </h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
