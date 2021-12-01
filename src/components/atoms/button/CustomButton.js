import { Button } from "@mui/material";

const CustomButton = ({variant, color, conent}) => 
    <Button
        color = {color}
        variant = {variant}
    >
        {conent}
    </Button>


export default CustomButton;