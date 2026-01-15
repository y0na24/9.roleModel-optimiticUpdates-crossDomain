export const ROUTES = {
  HOME: {
    path: "/",
    label: "Персонажи",
  },
  FAVORITES: {
    path: "/favorites",
    label: "Любимые",
  },
  ANALYTICS_TABLE: {
    path: "/analytics",
    label: "Аналитика",
  },
} as const;

export const getRoutes = () => Object.values(ROUTES);

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
