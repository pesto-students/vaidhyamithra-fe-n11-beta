import { TextField } from "@mui/material";
import { FieldContainer } from "./input.styled";

const InputField = ({ variant, label, type }) => {
  return (
    <FieldContainer>
      <TextField label={label} variant={variant} type={type} />
    </FieldContainer>
  );
};

export default InputField;
