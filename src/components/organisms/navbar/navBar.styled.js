import styled from "styled-components";
import { withTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export const NavBarContainer = withTheme(styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
  /* position: sticky; */
  /* top: 0px; */
  background: ${(props) => props.theme.palette.background.default};
  /* z-index: 1000; */
`);

export const NavBarTitle = withTheme(styled(Link)`
  padding-left: 22px;
  padding-top: 14px;
  padding-bottom: 12px;
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
  margin-right: auto;
`);

export const NavBarIconContainer = withTheme(styled("div")`
  margin: auto 24px;
  gap: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`);
