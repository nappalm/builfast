import { HOME_PATHS, homeRoutes } from '@/features/home';
import { Layout } from '@/shared';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: HOME_PATHS.base,
        children: homeRoutes,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
