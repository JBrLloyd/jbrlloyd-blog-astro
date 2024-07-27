import type { MiddlewareHandler } from 'astro';
import { defineMiddleware } from "astro/middleware";
import { envVars } from "./stores/envVarsStore";

export const onRequest: MiddlewareHandler = defineMiddleware((context, next) => {
  // const { env } = context.locals.runtime;
  const env = import.meta.env;

  envVars.set(env);

  return next();
});