// const Koa = require('koa');
// const koaBody = require('koa-bodyparser');
// const Router = require('koa-router');
// const trimmer = require('./index');
//
//
// const app = new Koa();
// const router = new Router();
//
// app.use(koaBody());
// app.use(trimmer('asdas'))
// const PORT = 1337;
//
// // app.use(async (ctx) => {
// //   console.log(ctx.request.body)
// //   ctx.body = {
// //     status: 'lala',
// //     message: 'hello, world!'
// //   };
// // });
//
//
//
// router.get('/test', async (ctx) => {
//   ctx.body = {
//     status: 'jkashdkjsa',
//     message: 'hello, world!'
//   };
// });
//
// router.post('/tester',  async (ctx) => {
//   // console.log(ctx.request.body)
//   // console.log(ctx.query)
//   console.log(ctx.params)
//   ctx.body = {body: ctx.request.body, query: ctx.query, params: ctx.params}
// });
// app.use(router.routes());
//
// const server = app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });


