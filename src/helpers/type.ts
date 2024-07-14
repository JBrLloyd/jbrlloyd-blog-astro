const assertUnreachable = (x: never): never => {
  throw new Error(`Unreachable code path hit, expected 'never' but got '${x}'`);
}

export type Flatten<T> = T extends { [K: string]: infer U } ? U : never;