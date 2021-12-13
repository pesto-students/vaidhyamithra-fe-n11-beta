import { Typography } from "@mui/material";
import { ROUTES } from "../../values/routes";
import { GoToHomepage, Wrapper } from "./pageNotFound.styled";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Typography variant="h1">Oops!</Typography>
      <Typography sx={{ mt: 2, mb: 4 }}>
        We don't know what you're looking for but we sure have lots more
      </Typography>
      <GoToHomepage onClick={() => navigate(ROUTES.HOME)}>
        Go to Homepage
      </GoToHomepage>
    </Wrapper>
  );
};

export default PageNotFound;
