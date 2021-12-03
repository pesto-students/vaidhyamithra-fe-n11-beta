import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Modal = ({ open, onClose, children, title }) => {
  return (
    <CustomDialog open={open} onClose={onClose}>
      <CustomDialogTitle onClose={onClose}>{title}</CustomDialogTitle>
      <DialogContent>{children}</DialogContent>
    </CustomDialog>
  );
};

export default Modal;
