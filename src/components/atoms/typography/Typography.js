import { Typography as MuiTypography } from "@mui/material";

const Typography = ({variant, children, ...otherProps}) => (
    <MuiTypography variant={variant} {...otherProps}>
        {children}
    </MuiTypography>
);

export default Typography;
