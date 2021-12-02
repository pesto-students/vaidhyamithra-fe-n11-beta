import { TextField } from "@mui/material";
import { INPUT_TYPES, INPUT_VARIANTS } from "./input.constant";

const InputField = ({ variant, label, type, fullWidth, helperText }) => {
  return (
    <TextField
      variant={variant}
      label={label}
      type={type}
      fullWidth={fullWidth}
      helperText={helperText}
      size="small"
      margin="normal"
    />
  );
};

InputField.defaultProps = {
  variant: INPUT_VARIANTS.OUTLINED,
  label: "",
  type: INPUT_TYPES.TEXT,
  fullWidth: false,
  helperText: "",
};

export default InputField;
