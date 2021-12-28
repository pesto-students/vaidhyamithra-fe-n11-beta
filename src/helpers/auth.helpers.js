import { useSelector } from "react-redux";
import { USER_SLICE } from "../redux/features/user/user.config";
import { useModalHelper } from ".";

export const useAuth = () => {
  const { userInfo } = useSelector((state) => state[USER_SLICE]);
  const { openLogin } = useModalHelper();

  const isLoggedIn = !!userInfo.id;

  const authenticatedFunction = (functionToCall) => {
    if (!userInfo.id) {
      openLogin();
      return;
    }
    functionToCall();
  };
  return { isLoggedIn, authenticatedFunction };
};
