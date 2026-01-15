import type { ComponentType } from "react";
import type { Container } from "inversify";
import { DiProvider } from "./di.provider";

export function withProviders<P extends object>(
  WrappedComponent: ComponentType<P>,
  { containers }: { containers: Container[] },
): ComponentType<P> {
  const ComponentWithDi = (props: P) => {
    const wrappedComponent = <WrappedComponent {...props} />;

    return containers.reduceRight(
      (children, container) => (
        <DiProvider container={container}>{children}</DiProvider>
      ),
      wrappedComponent,
    );
  };

  ComponentWithDi.displayName = `withDiProvider(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithDi;
}
