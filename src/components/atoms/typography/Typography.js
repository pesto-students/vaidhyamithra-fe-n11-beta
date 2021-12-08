import { Typography as MuiTypography } from "@mui/material";

const Typography = ({variant, children}) => (
    <MuiTypography variant={variant}>
        {children}
    </MuiTypography>
);

export default Typography;
