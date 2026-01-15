import type { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/utils";
import { List } from "./List";

type ListProps<Data extends { id: number | string }> = {
  data: Data[];
  renderData: (item: Data) => ReactNode;
} & ComponentProps<"ul">;

export const ListRenderProp = <Data extends { id: number | string }>({
  data,
  renderData,
  className,
  ...props
}: ListProps<Data>) => {
  return (
    <List className={cn("list-none", className)} {...props}>
      {data.map((item) => (
        <li key={item.id}>{renderData(item)}</li>
      ))}
    </List>
  );
};
