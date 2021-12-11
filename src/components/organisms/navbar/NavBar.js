import Typography from "../../atoms/typography";
import {
  NavBarContainer,
  NavBarTitle,
  NavBarIconContainer,
} from "./navBar.styled";
import Ficon from "../../atoms/featherIcon";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import { useState } from "react";

const NavBar = () => {
  const [showInputText, setShowInputText] = useState(false);

  return (
    <NavBarContainer>
      <NavBarTitle>
        <Typography variant="mainTitle">VaidhyaMitra</Typography>
      </NavBarTitle>
      <NavBarIconContainer>
        <Ficon icon="search" onClick={() => setShowInputText(true)}/>
        {
          showInputText &&
          <InputField 
            type={INPUT_TYPES.TEXT}
            InputProps={{
              endAdornment: 
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <Close />
                </IconButton>
              </InputAdornment>
            }}
          />
        }
        <Ficon icon="bookmark" />
        <Ficon icon="user" />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
