import Typography from "../../atoms/typography";
import {
  NavBarContainer,
  NavBarTitle,
  NavBarIconContainer,
} from "./navBar.styled";
import Ficon from "../../atoms/featherIcon";
import { ROUTES } from "../../../values/routes";
import Button from "../../atoms/button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <NavBarTitle to={ROUTES.HOME}>
        <Typography variant="mainTitle">VaidhyaMitra</Typography>
      </NavBarTitle>
      <Button onClick={() => navigate(ROUTES.CREATE)}>Create blog</Button>
      <NavBarIconContainer>
        <Ficon icon="search" clickHandler={() => navigate(ROUTES.SEARCH)} />
        {/* {
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
        } */}
        <Ficon icon="bookmark" />
        <Ficon icon="user" />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
