import { useEffect, useState } from "react";
import { Button as MuiButton } from "@mui/material";
import Modal from "../../molecules/modal";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";
import { useDispatch } from "react-redux";
import {
  hideModal,
  showModal,
} from "../../../redux/features/modals/modals.slice";

const Login = () => {
  const [open, setOpen] = useState(true);
  const { modalType } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(showModal({ type: MODAL_TYPES.LOGIN }));
  const handleClose = () => dispatch(hideModal());

  useEffect(() => {
    setOpen(modalType === MODAL_TYPES.LOGIN);
  }, [modalType]);

  return (
    <>
      <MuiButton onClick={handleOpen} variant="outlined">
        Login
      </MuiButton>
      <Modal open={open} onClose={handleClose} title="Login">
        <LoginForm />
      </Modal>
    </>
  );
};

export default Login;
