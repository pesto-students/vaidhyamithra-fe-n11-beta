import { Typography } from "@mui/material";
import { GoToHomepage, Wrapper } from "./pageNotFound.styled";

const PageNotFound = () => (
  <Wrapper>
    <Typography variant="h1">Oops!</Typography>
    <Typography variant="h2" sx={{ mt: 2 }}>
      We don't know what you're looking for but we sure have lots more
    </Typography>
    <GoToHomepage>Go to Homepage</GoToHomepage>
  </Wrapper>
);

export default PageNotFound;
