import { type ComponentProps, type ReactNode } from "react";

type ListProps = {
  children: ReactNode;
  className?: string;
} & ComponentProps<"ul">;

export function List({ children, className, ...props }: ListProps) {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );
}
