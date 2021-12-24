import { forwardRef } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import MuiSnackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { alertTypes } from "./snackbar.constants";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../redux/features/alerts/alerts.slice";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = () => {
  const { text, type } = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAlert({ text: "", type }));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <MuiSnackbar
        open={!!text}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {text}
        </Alert>
      </MuiSnackbar>
    </Stack>
  );
};

Snackbar.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(alertTypes)),
};

Snackbar.defaultProps = {
  text: "",
  type: alertTypes.info,
};

export default Snackbar;
