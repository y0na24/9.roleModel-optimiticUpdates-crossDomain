import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/UISelect";
import { Loader2 } from "lucide-react";
import type { User } from "./user.types";
import { Show } from "@/shared/ui/Show";

type UserSelectProps = {
  users: User[];
  isLoading: boolean;
  onValueChange: (value: User["id"]) => void;
};

export const UserSelect = ({
  users,
  isLoading,
  onValueChange,
}: UserSelectProps) => {
  return (
    <Select onValueChange={(value) => onValueChange(Number(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Выбери user'а" />
        <Show when={isLoading}>
          <Loader2 className="animate-spin" />
        </Show>
      </SelectTrigger>
      <Show when={users.length > 0}>
        <SelectContent>
          <SelectGroup>
            {users.map((user) => (
              <SelectItem key={user.id} value={String(user.id)}>
                {user.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Show>
    </Select>
  );
};
