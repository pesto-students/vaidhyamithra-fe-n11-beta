import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({ label, value, handleChange }) => (
  <FormControlLabel
    control={<MuiCheckbox checked={value} onChange={handleChange} />}
    label={label}
  />
);

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  handleChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
  value: false,
  handleChange: () => {},
};

export default Checkbox;
