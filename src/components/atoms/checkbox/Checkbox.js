import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({ label }) => (
  <FormControlLabel control={<MuiCheckbox />} label={label} />
);

export default Checkbox;
