import React from "react";
import { DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomDialog } from "./modal.styled";

const CustomDialogTitle = ({ children, onClose, ...otherProps }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2, pb: 0 }} variant="h2" {...otherProps}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Modal = ({ open, onClose, children, title }) => {
  return (
    <CustomDialog open={open} onClose={onClose}>
      <CustomDialogTitle onClose={onClose}>{title}</CustomDialogTitle>
      <DialogContent>{children}</DialogContent>
    </CustomDialog>
  );
};

export default Modal;
