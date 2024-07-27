import type { APIContext } from 'astro';
import { atom } from "nanostores";

export const locals = atom<APIContext['locals']>({});