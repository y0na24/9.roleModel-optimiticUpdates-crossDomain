import { cn } from "@/shared/lib/utils";
import { List } from "@/shared/ui/List";
import type { ComponentProps, ReactNode } from "react";

type CharacterListOptimizedProps = {
  children: ReactNode;
} & ComponentProps<"ul">;

export function CharacterListOptimized({
  children,
  className,
  ...props
}: CharacterListOptimizedProps) {
  return (
    <List
      className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mt-4", className)}
      {...props}
    >
      {children}
    </List>
  );
}
