import Base from "../pages";
import Authentication from "../pages/Authentication";
import ChangePassword from "../pages/ChangePassword";
import Licensing from "../pages/Licensing";
import PaymentHistory from "../pages/PaymentHistory";
import PaymentInformation from "../pages/PaymentInformation";

export const settingsRoutes = [
  {
    index: true,
    element: <Base />,
  },
  {
    path: "/settings/password-authentication/authentication",
    element: <Authentication />,
  },
  {
    path: "/settings/password-authentication/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/settings/billing-plans/licensing",
    element: <Licensing />,
  },
  {
    path: "/settings/billing-plans/payment-information",
    element: <PaymentInformation />,
  },
  {
    path: "/settings/billing-plans/payment-history",
    element: <PaymentHistory />,
  },
];
