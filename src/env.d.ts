/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import type { AdvancedRuntime } from '@astrojs/cloudflare'

declare global {
  namespace App {
    interface Locals {
      PROD?: boolean
    }
  }
}