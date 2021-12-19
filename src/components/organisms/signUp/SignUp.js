import React, { useEffect, useState } from "react";
import { Button as MuiButton } from "@mui/material";
import Modal from "../../molecules/modal";
import SigunpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import {
  hideModal,
  showModal,
} from "../../../redux/features/modals/modals.slice";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";

const SignUp = () => {
  const [open, setOpen] = useState(true);
  const { modalType } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(showModal({ type: MODAL_TYPES.SIGNUP }));
  const handleClose = () => dispatch(hideModal());

  useEffect(() => {
    setOpen(modalType === MODAL_TYPES.SIGNUP);
  }, [modalType]);

  return (
    <>
      <MuiButton onClick={handleOpen} variant="outlined">
        SignUp
      </MuiButton>
      <Modal open={open} onClose={handleClose} title="Sign Up">
        <SigunpForm />
      </Modal>
    </>
  );
};

export default SignUp;
