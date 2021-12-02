import React from "react";
import { Button as MuiButton } from "@mui/material";
import Modal from "../../components/molecules/modal";
import SigunpForm from "./signUpForm";

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MuiButton onClick={handleOpen} variant="outlined">
        Click me
      </MuiButton>
      <Modal open={open} onClose={handleClose} title="Sign Up">
        <SigunpForm />
      </Modal>
    </>
  );
}
