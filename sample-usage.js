const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const Router = require('koa-router');
const trimmer = require('koa-request-trimmer');

const app = new Koa();
const router = new Router();

const options = {
  body: true,
  query: true,
  params: true
};

app.use(koaBody());
app.use(trimmer(options));
const PORT = 1337;

router.post('/test-route',  async (ctx) => {
  ctx.body = {body: ctx.request.body, query: ctx.query, params: ctx.params}
});
app.use(router.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
