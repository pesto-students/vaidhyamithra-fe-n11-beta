import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialogTitle = ({ children, onClose, ...otherProps }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2, pb: 0 }} {...otherProps}>
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Modal = ({ open, onClose, children, title }) => {
  return (
    <BootstrapDialog open={open} onClose={onClose}>
      <BootstrapDialogTitle
        variant="h2"
        id="customized-dialog-title"
        onClose={onClose}
      >
        {title}
      </BootstrapDialogTitle>
      <DialogContent>{children}</DialogContent>
    </BootstrapDialog>
  );
};

export default Modal;
