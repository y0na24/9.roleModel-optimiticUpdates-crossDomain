import { Container, type GetOptions, type ServiceIdentifier } from "inversify";
import { createDi } from "../react/createDi";
import { useState, type ReactNode } from "react";

const { Injector, useDi } = createDi<Container>();

type DiProviderProps = {
  children: ReactNode;
  container: Container;
};

export const DiProvider = ({ children, container }: DiProviderProps) => {
  return <Injector value={container}>{children}</Injector>;
};

export function useAppInjection<T>(
  token: ServiceIdentifier<T>,
  options?: GetOptions,
): T {
  const container = useDi();
  const [service] = useState(() => container.get(token, options));

  return service;
}
