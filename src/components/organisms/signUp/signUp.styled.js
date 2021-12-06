import { withTheme } from "@emotion/react";
import styled from "styled-components";

export const FormContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  width: 340px;
`;

export const NoteText = withTheme(styled("div")`
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: 12px;
`);

export const ModalActions = styled.div`
  color: #718797;
  margin-top: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LeftStart = styled.div`
  margin-right: auto;
`;
