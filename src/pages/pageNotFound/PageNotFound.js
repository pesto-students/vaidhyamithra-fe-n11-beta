import { Typography } from "@mui/material";
import { ROUTES } from "../../values/routes";
import { GoToHomepage, Wrapper } from "./pageNotFound.styled";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate(ROUTES.HOME);

  return (
    <Wrapper>
      <Typography variant="h1">Oops!</Typography>
      <Typography sx={{ mt: 2, mb: 4 }}>
        We don't know what you're looking for but we sure have lots more
      </Typography>
      <GoToHomepage onClick={goHome}>Go to Homepage</GoToHomepage>
    </Wrapper>
  );
};

export default PageNotFound;
