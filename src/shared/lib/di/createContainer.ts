import { Container, type ContainerOptions } from "inversify";

export const createContainer = (
  load: (container: Container) => void,
  options?: ContainerOptions,
) => {
  const container = new Container(options);
  load(container);
  return container;
};
