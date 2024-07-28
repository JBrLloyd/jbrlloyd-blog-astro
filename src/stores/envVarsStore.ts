import { atom } from "nanostores";

export const envVars = atom<Env>({
  HIDE_DRAFTS: false
});

export const updateEnvVars = (vars: Partial<Env> | null | undefined) => {
  if (!vars)
    return;

  const existingEnvVars = envVars.get();

  if (!existingEnvVars)
    return;

  const newEnvVars = {
    ...existingEnvVars,
    ...vars
  }

  envVars.set(newEnvVars);
}