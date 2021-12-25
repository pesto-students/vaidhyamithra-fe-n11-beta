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

const NavBar = () => {
  const { gotoPrivateRoute, gotoRoute } = useRouting();
  const { isDoctor } = useSelector((state) => state.user.userInfo);

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
        {/* <Ficon icon="bookmark" /> */}
        <Ficon
          icon="user"
          handleClick={() => gotoPrivateRoute(ROUTES.MY_PROFILE)}
        />
      </NavBarIconContainer>
    </NavBarContainer>
  );
};

export default NavBar;
