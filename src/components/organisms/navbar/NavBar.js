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
        <Ficon icon="search" handleClick={() => navigate(ROUTES.SEARCH)} />
        {/* <Ficon icon="bookmark" /> */}
        <Ficon icon="user" handleClick={() => navigate(ROUTES.MY_PROFILE)} />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
