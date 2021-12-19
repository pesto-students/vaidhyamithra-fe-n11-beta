import { useEffect, useState } from "react";
import Modal from "../../molecules/modal";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../redux/features/modals/modals.slice";

const LoginModal = () => {
  const [open, setOpen] = useState(true);
  const { modalType } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideModal());

  useEffect(() => {
    setOpen(modalType === MODAL_TYPES.LOGIN);
  }, [modalType]);

  return (
    <>
      <Modal open={open} onClose={handleClose} title="Login">
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginModal;
