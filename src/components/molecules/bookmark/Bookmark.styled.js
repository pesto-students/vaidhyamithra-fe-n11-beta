import { withTheme } from "@emotion/react";
import styled from "styled-components";

export const IconContainer = withTheme(styled("div")`
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;

  svg:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`);
