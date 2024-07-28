import type { MiddlewareHandler } from 'astro';
import { defineMiddleware } from "astro/middleware";
import { updateEnvVars } from "./stores/envVarsStore";

export const onRequest: MiddlewareHandler = defineMiddleware((context, next) => {
  console.log(JSON.stringify(context.locals.runtime));
  // console.log(context.locals);
  updateEnvVars(context.locals.runtime?.env);

  return next();
});