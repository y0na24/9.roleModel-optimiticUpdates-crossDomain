import type { AsyncDataExt } from "@reatom/core";
import type { Loadable } from "../lib.types";

export const fromResourceToLoadable = <Data extends unknown[]>(
  resource: {
    data: () => Data;
    ready: () => boolean;
    error: () => Error | undefined;
  } & AsyncDataExt<[], Data, Data, Data, Error | undefined>,
): Loadable<Data> => ({
  data: resource.data(),
  isLoading: !resource.ready(),
  isError: Boolean(resource.error()),
});
