import { Close } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import InputField, { INPUT_TYPES, INPUT_VARIANTS } from "../../atoms/input";
import { SearchField } from "./textFieldForSearch.styled";
import Ficon from "../../atoms/featherIcon/";
const TextFieldForSearch = ({}) => {
  return (
    <SearchField>
      <Ficon icon="search" />
      <InputField
        type={INPUT_TYPES.TEXT}
        placeholder="Search here"
        fullWidth
        variant={INPUT_VARIANTS.STANDARD}
        // InputProps={{
        //   endAdorement: (
        //     <InputAdornment position="end">
        //       <IconButton>
        //         <Close />
        //       </IconButton>
        //     </InputAdornment>
        //   ),
        // }}
      />
    </SearchField>
  );
};

export default TextFieldForSearch;
