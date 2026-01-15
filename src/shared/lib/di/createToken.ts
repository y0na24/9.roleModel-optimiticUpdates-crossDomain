type TokenBrand<T> = { readonly __service__: T };
export type Token<T> = (string | symbol) & TokenBrand<T>;

export const createToken = <T>(name: string): Token<T> => name as Token<T>;