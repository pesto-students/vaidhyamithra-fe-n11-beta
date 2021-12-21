import { useSelector } from "react-redux";
import { USER_SLICE } from "../redux/features/user/user.config";

export const useAuth = () => {
  const { userInfo } = useSelector((state) => state[USER_SLICE]);

  const isLoggedIn = !!userInfo.id;

  return { isLoggedIn };
};
