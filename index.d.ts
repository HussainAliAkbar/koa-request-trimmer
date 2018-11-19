declare module "koa-request-trimmer" {
  import { Middleware } from "koa";
  interface IOptions {
    body?: boolean;
    query?: boolean;
    params?: boolean;
  }

  function koaRequestTrimmer(opts?: IOptions): Middleware;
  export = koaRequestTrimmer;
}
