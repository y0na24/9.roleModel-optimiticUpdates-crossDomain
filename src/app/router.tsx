import { ROUTES } from "@/shared/routes";
import { BaseLayout } from "./baseLayout.component";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter } from "react-router-dom";
import { AnalyticsDashboardPage } from "@/pages/AnalyticsDashboardPage/analyticsDashboardPage.component";
import { CharactersPage } from "@/pages/CharactersPage/charactersPage.component";
import { FavoritesPage } from "@/pages/FavoritesPage/favoritesPage.component";

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary fallback={<div>Что-то пошло не так</div>}>
        <BaseLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <CharactersPage />,
      },
      {
        path: ROUTES.FAVORITES.path,
        element: <FavoritesPage />,
      },
      {
        path: ROUTES.ANALYTICS_TABLE.path,
        element: <AnalyticsDashboardPage />,
      },
    ],
  },
]);
