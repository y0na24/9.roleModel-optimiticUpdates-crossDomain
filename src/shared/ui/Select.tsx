import type { ComponentProps, ReactNode } from "react";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as UISelect,
} from "./UISelect";
import { cn } from "../lib/utils";

type SelectProps = {
  items: { label: ReactNode; value: string }[];
  triggerPlaceholder: string;
} & ComponentProps<typeof UISelect>;

export const Select = ({
  items,
  triggerPlaceholder,
  ...props
}: SelectProps) => {
  return (
    <UISelect {...props}>
      <SelectTrigger className={cn("w-[180px]")}>
        <SelectValue placeholder={triggerPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem value={item.value}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </UISelect>
  );
};
