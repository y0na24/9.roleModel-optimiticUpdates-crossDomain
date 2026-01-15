import { createStrictContext } from "./createStrictContext";
import { useStrictContext } from "./useStrictContext";

export const createDi = <T>() => {
  const injector = createStrictContext<T>();
  const useDi = () => useStrictContext(injector);

  return { Injector: injector.Provider, useDi };
};
