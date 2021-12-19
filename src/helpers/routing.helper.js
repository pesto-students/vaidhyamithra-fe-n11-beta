import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../components/organisms/login";
import { USER_SLICE } from "../redux/features/user/user.config";

export const useRouting = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state[USER_SLICE]);
  const { openLoginModal } = useLogin();

  const gotoPrivateRoute = (route) => {
    if (!userInfo.id) {
      openLoginModal();
      return;
    }
    navigate(route);
  };

  const gotoRoute = (route) => navigate(route);

  return { gotoPrivateRoute, gotoRoute };
};
