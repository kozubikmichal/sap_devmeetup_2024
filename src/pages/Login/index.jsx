import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/router";
import useActiveUser from "../../hooks/useActiveUser";

import { verify } from "../../utils/user";
import LoginForm from "./LoginForm";

import "./styles.css";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useActiveUser();
  const [error, setError] = useState(null);

  const onSubmit = ({ username, password }) => {
    if (!verify(username, password)) {
      setError("Invalid username or password");
    } else {
      setError(null);
      login(username);
      navigate(ROUTES.UserPortal);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="Error">{error}</div>}
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
