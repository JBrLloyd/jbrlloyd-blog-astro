/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import type { AdvancedRuntime } from '@astrojs/cloudflare'

type AdditionalEnvVars = {
  SHOW_DRAFTS?: boolean
}

type Runtime = import('@astrojs/cloudflare').Runtime<AdditionalEnvVars>;

declare global {
  namespace App {
    interface Locals extends Runtime {}
  }
}