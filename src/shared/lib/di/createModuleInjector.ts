/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

import type { Token } from "./createToken";
import { useAppInjection } from "./di.provider";

type ExtractServiceType<S> =
  S extends Token<infer T>
    ? T
    : S extends new (...args: any[]) => infer T
      ? T
      : unknown;

export const createModuleInjector = <
  const T extends readonly (
    | Token<unknown>
    | (new (...args: any[]) => unknown)
  )[],
>(
  providers: T,
) => {
  return <S extends T[number]>(token: S): ExtractServiceType<S> => {
    return useAppInjection(token as any);
  };
};
