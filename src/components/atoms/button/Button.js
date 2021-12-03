import { Button as MuiButton } from "@mui/material";
import { BUTTON_VARIANTS } from ".";

const Button = ({ variant, children, ...otherProps }) => (
  <MuiButton variant={variant} {...otherProps}>
    {children}
  </MuiButton>
);

Button.defaultProps = {
  variant: BUTTON_VARIANTS.CONTAINED,
};

export default Button;
