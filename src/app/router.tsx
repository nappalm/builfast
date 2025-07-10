import { AUTH_PATHS, AuthGuard, authRoutes } from '@/features/auth';
import { HOME_PATHS, homeRoutes } from '@/features/home';

import { Layout } from '@/shared';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: AUTH_PATHS.base,
    children: authRoutes,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: HOME_PATHS.base,
            children: homeRoutes,
          },
          {
            path: '*',
            element: <Navigate to={HOME_PATHS.base} replace />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
