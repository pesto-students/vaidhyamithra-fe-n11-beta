import { useEffect, useState } from "react";
import Modal from "../../molecules/modal";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";
import { useModalHelper } from "../../../helpers";

const LoginModal = () => {
  const [open, setOpen] = useState(true);
  const { modalType } = useSelector((state) => state.modals);
  const { closeModal } = useModalHelper();

  useEffect(() => {
    setOpen(modalType === MODAL_TYPES.LOGIN);
  }, [modalType]);

  return (
    <>
      <Modal open={open} onClose={closeModal} title="Login">
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginModal;
