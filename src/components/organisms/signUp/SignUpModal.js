import React, { useEffect, useState } from "react";
import Modal from "../../molecules/modal";
import SigunpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";
import { useModalHelper } from "../../../helpers";

const SignUpModal = () => {
  const [open, setOpen] = useState(true);
  const { modalType } = useSelector((state) => state.modals);
  const { closeModal } = useModalHelper();

  useEffect(() => {
    setOpen(modalType === MODAL_TYPES.SIGNUP);
  }, [modalType]);

  return (
    <>
      <Modal open={open} onClose={closeModal} title="Sign Up">
        <SigunpForm />
      </Modal>
    </>
  );
};

export default SignUpModal;
