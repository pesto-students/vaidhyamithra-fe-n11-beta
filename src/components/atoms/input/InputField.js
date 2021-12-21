import { TextField } from "@mui/material";
import { INPUT_MARGINS } from ".";
import { INPUT_TYPES, INPUT_VARIANTS } from "./input.constant";

const InputField = ({
  variant,
  label,
  type,
  fullWidth,
  helperText,
  placeholder,
  className,
  multiline,
  margin,
  endAdornment,
  onChangeValue
}) => {
  return (
    <TextField
      variant={variant}
      label={label}
      type={type}
      fullWidth={fullWidth}
      helperText={helperText}
      size="small"
      margin={margin}
      placeholder={placeholder}
      className={className}
      multiline={multiline}
      InputProps={{ endAdornment }}
      onChange = {(e) => onChangeValue(e.target.value)}
    />
  );
};

InputField.defaultProps = {
  variant: INPUT_VARIANTS.OUTLINED,
  label: "",
  type: INPUT_TYPES.TEXT,
  fullWidth: false,
  helperText: "",
  placeholder: "",
  className: "",
  multiline: false,
  margin: INPUT_MARGINS.NORMAL,
  endAdornment: null,
};

export default InputField;
