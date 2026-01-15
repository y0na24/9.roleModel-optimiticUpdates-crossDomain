import type { ReactNode } from "react";

export const Show = ({
  when,
  children,
}: {
  when: boolean;
  children: ReactNode | ((value: boolean) => ReactNode);
}) => {
  if (!when) return null;

  return typeof children === "function" ? children(when) : children;
};
