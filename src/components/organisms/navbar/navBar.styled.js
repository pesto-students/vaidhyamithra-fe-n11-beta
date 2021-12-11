import styled from "styled-components";
import { withTheme } from "@emotion/react";

export const NavBarContainer = withTheme(styled("div") `
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e1e2e2;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 1000;
    color: ${(props) => props.theme.palette.primary.main};
`);

export const NavBarTitle = styled.div`
    padding-left: 22px;
    padding-top: 14px;
    padding-bottom: 12px;
`;

export const NavBarIconContainer = styled.div`
    padding-right: 22px;
    gap: 16px;
    display: flex;
    align-items: center;
`;