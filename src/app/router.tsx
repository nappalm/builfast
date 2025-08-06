import { AUTH_PATHS, AuthGuard, authRoutes } from "@/features/auth";
import { HOME_PATHS, homeRoutes } from "@/features/home";
import { ONBOARDING_PATHS, onboardingRoutes } from "@/features/onboarding";

import { Layout } from "@/shared";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

/**
 * @constant protectedRoutes
 * @description These routes are protected by the AuthGuard and are only accessible to authenticated users.
 * These routes are rendered within the main Layout, which includes the navigation bar and other shared components.
 */
const protectedRoutes = [
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
        path: "*",
        element: <Navigate to={HOME_PATHS.base} replace />,
      },
    ],
  },
];

/**
 * @constant publicRoutes
 * @description These routes are public and do not require authentication.
 * This includes the authentication-related routes like sign-in and sign-up.
 * If a user navigates to the base "/auth" path, they will be redirected to the sign-in page.
 */
const publicRoutes = [
  {
    path: AUTH_PATHS.base,
    children: [
      ...authRoutes,
      {
        index: true,
        element: <Navigate to={AUTH_PATHS.signIn} replace />,
      },
    ],
  },
];

/**
 * @constant routerConfiguration
 * @description The main router configuration for the application.
 * It combines protected and public routes. The AuthGuard is used to protect the routes that require authentication.
 */
const routerConfiguration = [
  {
    element: <AuthGuard />,
    children: protectedRoutes,
  },
  ...publicRoutes,
];

const router = createBrowserRouter(routerConfiguration);

export default function Router() {
  return <RouterProvider router={router} />;
}
