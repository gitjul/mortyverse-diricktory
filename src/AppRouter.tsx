import {
  createRouter,
  createRootRoute,
  Outlet,
  RouterProvider,
  createRoute,
} from "@tanstack/react-router";

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
  component: () => <div>Hello World</div>,
});

const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree });

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
