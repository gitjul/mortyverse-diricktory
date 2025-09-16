import {
  createRouter,
  createRootRoute,
  Outlet,
  RouterProvider,
  createRoute,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <header>Header</header>
      <Outlet />
    </>
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
