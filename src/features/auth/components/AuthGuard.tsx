import { Navigate, Outlet } from "react-router-dom";

import { AUTH_PATHS } from "@/features/auth/router/paths";
import { useAuthenticatedUser } from "@/shared";

export default function AuthGuard() {
  const { user, loading } = useAuthenticatedUser();

  if (loading && user === null) {
    // Optionally, render a loading spinner or skeleton here
    return <div>loading...</div>;
  }

  if (!user) {
    return <Navigate to={AUTH_PATHS.signIn} replace />;
  }

  return <Outlet />;
}
