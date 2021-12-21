import { Typography } from "@mui/material";
import { useRouting } from "../../helpers";
import { ROUTES } from "../../values/routes";
import { GoToHomepage, Wrapper } from "./pageNotFound.styled";

const PageNotFound = () => {
  const { gotoRoute } = useRouting();

  return (
    <Wrapper>
      <Typography variant="h1">Oops!</Typography>
      <Typography sx={{ mt: 2, mb: 4 }}>
        We don't know what you're looking for but we sure have lots more
      </Typography>
      <GoToHomepage onClick={() => gotoRoute(ROUTES.HOME)}>
        Go to Homepage
      </GoToHomepage>
    </Wrapper>
  );
};

export default PageNotFound;
