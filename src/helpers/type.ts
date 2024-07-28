export const assertUnreachable = (x: never): never => {
  throw new Error(`Unreachable code path hit, expected 'never' but got '${x}'`);
}

export type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

export function nameof<T>(key: keyof T, instance?: T): keyof T {
    return key;
}