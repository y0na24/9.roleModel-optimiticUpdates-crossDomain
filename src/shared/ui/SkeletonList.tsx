import type { ComponentProps } from "react";
import { List } from "./List";
import { SkeletonCard } from "./SkeletonCard";
import { cn } from "../lib/utils";

type SkeletonList = {
  count?: number;
} & ComponentProps<"ul">;

export const SkeletonList = ({
  count = 5,
  className,
  ...props
}: SkeletonList) => {
  return (
    <List
      className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mt-4", className)}
      {...props}
    >
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </List>
  );
};
