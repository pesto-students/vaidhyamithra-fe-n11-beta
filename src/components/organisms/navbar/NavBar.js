import Typography from "../../atoms/typography";
import {
  NavBarContainer,
  NavBarTitle,
  NavBarIconContainer,
} from "./navBar.styled";
import Ficon from "../../atoms/featherIcon";
import { ROUTES } from "../../../values/routes";
import Button from "../../atoms/button";
import { useRouting } from "../../../helpers";
import { useSelector } from "react-redux";
import { generatePath } from "react-router-dom";

const NavBar = () => {
  const { gotoPrivateRoute, gotoRoute } = useRouting();
  const { id, isDoctor } = useSelector((state) => state.user.userInfo);

  const profilePath = generatePath(ROUTES.PROFILE, { userId: id });

  return (
    <NavBarContainer>
      <NavBarTitle to={ROUTES.HOME}>
        <Typography variant="mainTitle">VaidhyaMitra</Typography>
      </NavBarTitle>
      {isDoctor && (
        <Button onClick={() => gotoPrivateRoute(ROUTES.CREATE)}>
          Start writing
        </Button>
      )}
      <NavBarIconContainer>
        <Ficon icon="search" handleClick={() => gotoRoute(ROUTES.SEARCH)} />
        <Ficon icon="user" handleClick={() => gotoPrivateRoute(profilePath)} />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
