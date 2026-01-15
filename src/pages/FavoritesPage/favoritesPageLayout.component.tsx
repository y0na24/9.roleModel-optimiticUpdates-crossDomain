import type { ReactNode } from "react";

export const FavoritesPageLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
};
