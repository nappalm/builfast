import Base from "../pages";
import PasswordAndAuthentication from "../pages/PasswordAndAuthentication";

export const settingsRoutes = [
  {
    index: true,
    element: <Base />,
  },
  {
    path: "/settings/password-authentication",
    element: <PasswordAndAuthentication />,
  },
];
