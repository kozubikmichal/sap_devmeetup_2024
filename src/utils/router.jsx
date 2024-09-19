import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import UserPortal from "../pages/UserPortal";
import Protected from "../components/Protected";

export const ROUTES = {
  Login: "/",
  UserPortal: "/protected",
};

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: ROUTES.Login,
      element: <LoginPage />,
    },
    {
      path: ROUTES.UserPortal,
      element: (
        <Protected>
          <UserPortal />
        </Protected>
      ),
    },
  ]);
};
