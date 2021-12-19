import Typography from "../../atoms/typography";
import {
  NavBarContainer,
  NavBarTitle,
  NavBarIconContainer,
} from "./navBar.styled";
import Ficon from "../../atoms/featherIcon";
import { ROUTES } from "../../../values/routes";
import Button from "../../atoms/button";
import { useRouting } from "../../../helpers/routing.helper";

const NavBar = () => {
  const { gotoPrivateRoute, gotoRoute } = useRouting();

  return (
    <NavBarContainer>
      <NavBarTitle to={ROUTES.HOME}>
        <Typography variant="mainTitle">VaidhyaMitra</Typography>
      </NavBarTitle>
      <Button onClick={() => gotoPrivateRoute(ROUTES.CREATE)}>
        Create blog
      </Button>
      <NavBarIconContainer>
        <Ficon icon="search" handleClick={() => gotoRoute(ROUTES.SEARCH)} />
        {/* <Ficon icon="bookmark" /> */}
        <Ficon
          icon="user"
          handleClick={() => gotoPrivateRoute(ROUTES.SEARCH)}
        />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
