import { Modal as MuiModal } from "@mui/material";
import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      {children}
    </MuiModal>
  );
};

export default Modal;
