import type { ReactNode } from "react";

type HeaderLayoutProps = {
  navbarSlot: ReactNode;
  actionSlot: ReactNode;
};

export const HeaderLayout = ({ navbarSlot, actionSlot }: HeaderLayoutProps) => {
  return (
    <header className="border-b container mx-auto p-4 flex items-center justify-between gap-4">
      {navbarSlot}
      {actionSlot}
    </header>
  );
};
