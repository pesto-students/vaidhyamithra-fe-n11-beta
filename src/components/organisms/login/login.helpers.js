import { useDispatch } from "react-redux";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";
import { showModal } from "../../../redux/features/modals/modals.slice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const openLoginModal = () => dispatch(showModal({ type: MODAL_TYPES.LOGIN }));

  return { openLoginModal };
};
