import { withTheme } from "@emotion/react";
import styled from "styled-components";
import Button from "../../components/atoms/button";

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfileDataContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
`;

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

export const EditIconContainer = withTheme(styled("div")`
  cursor: pointer;
  margin-right: 12px;

  svg:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`);

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UpdateInterestsBtn = styled(Button)`
  margin-right: auto;
`;

export const LogoutContainer = styled.div`
  margin-top: auto;
`;
