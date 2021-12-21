import LoadingButton from "@mui/lab/LoadingButton";

import { BUTTON_VARIANTS } from ".";

const Button = ({ variant, children, loading, ...otherProps }) => (
  <LoadingButton variant={variant} loading={loading} {...otherProps}>
    {children}
  </LoadingButton>
);

Button.defaultProps = {
  variant: BUTTON_VARIANTS.CONTAINED,
  loading: false,
};

export default Button;
