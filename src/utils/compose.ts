export const compose =
  (...fns: any[]) =>
  (arg = "") =>
    fns.reduce((composed, fn) => fn(composed), arg);
