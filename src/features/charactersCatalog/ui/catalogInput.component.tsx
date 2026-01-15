import { Input } from "@/shared/ui/Input";
import type { Atom } from "@reatom/core";
import { reatomComponent } from "@reatom/react";

export const CatalogInput = reatomComponent(({ value }: { value: Atom }) => {
  return (
    <Input
      placeholder="Поиск персонажа по имени..."
      value={value()}
      onChange={(e) => value.set(e.target.value)}
    />
  );
});
