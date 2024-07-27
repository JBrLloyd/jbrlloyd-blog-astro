import type { AdditionalEnvVars } from '@src/env';
import { atom } from "nanostores";

export const envVars = atom<AdditionalEnvVars>({});