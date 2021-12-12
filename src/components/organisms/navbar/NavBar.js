import Typography from "../../atoms/typography";
import {
  NavBarContainer,
  NavBarTitle,
  NavBarIconContainer,
} from "./navBar.styled";
import Ficon from "../../atoms/featherIcon";
import { ROUTES } from "../../../values/routes";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarTitle to={ROUTES.HOME}>
        <Typography variant="mainTitle">VaidhyaMitra</Typography>
      </NavBarTitle>
      <NavBarIconContainer>
        <Ficon icon="search" />
        <Ficon icon="bookmark" />
        <Ficon icon="user" />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
