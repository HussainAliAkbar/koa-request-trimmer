import { Middleware } from "koa";

declare module 'koa-request-trimmer' {
    export type koaRequestTrimmer = (opts?: IOptions) => Middleware;

    export interface IOptions {
        body?: boolean;
        query?: boolean;
        params?: boolean;
    }

    const koaRequestTrimmer: koaRequestTrimmer;
}
export default koaRequestTrimmer;
