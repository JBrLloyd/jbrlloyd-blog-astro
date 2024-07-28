/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import type { AdvancedRuntime } from '@astrojs/cloudflare'
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare global {
  namespace App {
    interface Locals extends Runtime {}
  }
}