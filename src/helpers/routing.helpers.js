import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from ".";
import { USER_SLICE } from "../redux/features/user/user.config";
import { ROUTES } from "../values/routes";
import { useModalHelper } from "./modal.helpers";

export const useRouting = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state[USER_SLICE]);
  const { openLogin } = useModalHelper();

  const gotoPrivateRoute = (route) => {
    // todo: check if user logged in
    if (!userInfo.id) {
      openLogin();
      return;
    }
    navigate(route);
  };

  const gotoRoute = (route) => navigate(route);

  return { gotoPrivateRoute, gotoRoute };
};

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={ROUTES.HOME} />;
};
