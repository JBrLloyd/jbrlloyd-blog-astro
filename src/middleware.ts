import type { MiddlewareHandler } from 'astro';
import { defineMiddleware } from "astro/middleware";
import { locals } from "./stores/localsStore";

export const onRequest: MiddlewareHandler = defineMiddleware((context, next) => {
  locals.set(context.locals);

  return next();
});