import React from "react";
import { Button as MuiButton } from "@mui/material";
import Modal from "../../../components/molecules/modal";
import LoginForm from "./loginForm";

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
}
