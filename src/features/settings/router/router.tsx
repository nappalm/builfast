import Base from "../pages";
import Licensing from "../pages/Licensing";
import PasswordAndAuthentication from "../pages/PasswordAndAuthentication";
import PaymentHistory from "../pages/PaymentHistory";
import PaymentInformation from "../pages/PaymentInformation";

export const settingsRoutes = [
  {
    index: true,
    element: <Base />,
  },
  {
    path: "/settings/password-authentication",
    element: <PasswordAndAuthentication />,
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
