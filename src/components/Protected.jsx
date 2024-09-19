import { useNavigate } from "react-router-dom";
import useActiveUser from "../hooks/useActiveUser";
import { useEffect } from "react";
import { ROUTES } from "../utils/router";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useActiveUser();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.Login);
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default Protected;
