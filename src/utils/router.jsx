import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import UserPortal from "../pages/UserPortal";

export const ROUTES = {
  Login: "/",
  Protected: "/protected",
};

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: ROUTES.Login,
      element: <LoginPage />,
    },
    {
      path: ROUTES.Protected,
      element: <UserPortal />,
    },
  ]);
};
