import { useDispatch } from "react-redux";
import { MODAL_TYPES } from "../redux/features/modals/modals.congif";
import { hideModal, showModal } from "../redux/features/modals/modals.slice";

export const useModalHelper = () => {
  const dispatch = useDispatch();

  const openLogin = () => dispatch(showModal({ type: MODAL_TYPES.LOGIN }));

  const openSignup = () => dispatch(showModal({ type: MODAL_TYPES.SIGNUP }));

  const openInterests = () =>
    dispatch(showModal({ type: MODAL_TYPES.INTERESTS }));

  const closeModal = () => dispatch(hideModal());

  return { openLogin, openSignup, openInterests, closeModal };
};
