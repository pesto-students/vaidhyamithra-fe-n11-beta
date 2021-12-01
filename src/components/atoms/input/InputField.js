import { TextField } from "@mui/material"
import Box from '@mui/material/Box';
import { FieldContainer } from "./input.styled";
const InputField = ({variant, label, type}) => {
    return (
        <FieldContainer>
            <TextField label={label} variant={variant} type={type}/>
        </FieldContainer>
    )
}
export default InputField;