import type { MiddlewareHandler } from 'astro';
import { defineMiddleware } from "astro/middleware";
import { envVars } from "./stores/envVarsStore";

export const onRequest: MiddlewareHandler = defineMiddleware((context, next) => {
  console.log(context.locals.runtime)
  envVars.set(context.locals.runtime?.env ?? {});

  return next();
});