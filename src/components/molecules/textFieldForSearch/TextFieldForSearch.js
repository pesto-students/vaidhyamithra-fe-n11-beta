import { IconButton, InputAdornment } from "@mui/material";
import InputField, {
  INPUT_TYPES,
  INPUT_VARIANTS,
  INPUT_MARGINS,
} from "../../atoms/input";
import { SearchField } from "./textFieldForSearch.styled";
import Ficon from "../../atoms/featherIcon/";

const TextFieldForSearch = ({ placeHolder, handleChange, value }) => {
  return (
    <SearchField>
      <Ficon icon="search" />
      <InputField
        type={INPUT_TYPES.TEXT}
        placeholder={placeHolder}
        fullWidth
        value={value}
        margin={INPUT_MARGINS.NONE}
        variant={INPUT_VARIANTS.STANDARD}
        handleChange={(e) => handleChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => handleChange("")}>
              <Ficon icon="x" />
            </IconButton>
          </InputAdornment>
        }
      />
    </SearchField>
  );
};

export default TextFieldForSearch;
