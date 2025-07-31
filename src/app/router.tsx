import { HOME_PATHS, homeRoutes } from '@/features/home';
import { ONBOARDING_PATHS, onboardingRoutes } from '@/features/onboarding';

import { Layout } from '@/shared';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: HOME_PATHS.base,
        children: homeRoutes,
      },
      {
        path: ONBOARDING_PATHS.base,
        children: onboardingRoutes,
      },
      {
        path: '*',
        element: <Navigate to={HOME_PATHS.base} replace />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
