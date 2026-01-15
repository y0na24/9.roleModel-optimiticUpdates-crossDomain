import type { ReactNode } from "react";

type CanBaseProps = {
  can: () => boolean;
  not?: boolean;
  fallback?: ReactNode;
};

type CanPassThroughProps = CanBaseProps & {
  passThrough: true;
  children: (allowed: boolean) => ReactNode;
};

type CanNoPassThroughProps = CanBaseProps & {
  passThrough?: false;
  children: ReactNode;
};

type CanProps = CanPassThroughProps | CanNoPassThroughProps;

export const Can = ({
  can,
  not = false,
  fallback = null,
  children,
  passThrough,
}: CanProps) => {
  const allowed = can();
  const shouldRender = not ? !allowed : allowed;

  if (passThrough) {
    return children(shouldRender);
  }

  return shouldRender ? <>{children}</> : fallback;
};
