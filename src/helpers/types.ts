const assertUnreachable = (x: never): never => {
  throw new Error(`Unreachable code path hit, expected 'never' but got '${x}'`);
}
