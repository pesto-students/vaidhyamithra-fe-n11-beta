import { withTheme } from "@emotion/react";
import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
`;

export const LeftSection = styled.div`
  width: 65%;
  height: calc(100vh - 72px);
  padding: 20px 40px;
  overflow: auto;
`;

export const RightSection = withTheme(styled("div")`
  width: 35%;
  height: calc(100vh - 72px);
  min-width: 300px;
  padding: 40px;
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
  overflow: auto;
`);
