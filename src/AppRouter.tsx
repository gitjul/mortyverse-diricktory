import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import { Characters } from "./components/characters";
import QueryProvider from "./providers/query-provider";

const rootRoute = createRootRoute({
  component: () => (
    <QueryProvider>
      <header>Header</header>
      <Outlet />
    </QueryProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Characters />,
});

const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree });

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
