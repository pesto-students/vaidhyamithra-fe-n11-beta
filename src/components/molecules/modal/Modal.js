import { Dialog, DialogContent, DialogTitle, Modal as MuiModal, IconButton, styled, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import React from "react";

const Modal = ({ open, onClose, children, title }) => {

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  return (
    // <MuiModal open={open} onClose={onClose}>
    //   {children}
    // </MuiModal>

    <BootstrapDialog 
      open = {open}
      onClose = {onClose}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        {/* <Typography variant="h2">{title}</Typography> */}
        {title}
      </BootstrapDialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </BootstrapDialog>
  );
};

export default Modal;
