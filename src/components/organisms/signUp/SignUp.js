import React from "react";
import { Button as MuiButton } from "@mui/material";
import Modal from "../../molecules/modal";
import SigunpForm from "./SignUpForm";

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
