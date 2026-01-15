import { ContainerModule, type ContainerModuleLoadOptions } from "inversify";

export const createModule = (
  load: (options: ContainerModuleLoadOptions) => void,
) => {
  return new ContainerModule(load);
};
