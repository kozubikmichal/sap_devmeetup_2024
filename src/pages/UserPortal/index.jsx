import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/router";

import "./styles.css";
import useActiveUser from "../../hooks/useActiveUser";

const ProtectedPage = () => {
  const navigate = useNavigate();
  const { logout, user } = useActiveUser();

  const onLogout = () => {
    logout();
    navigate(ROUTES.Login);
  };

  return (
    <div className="Page">
      <div>User Area</div>
      <div>Logged as {user}</div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProtectedPage;
