import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: ${(props) => props.fontFamily || "Amiko"};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height: 1.2;
  font-weight: ${(props) => props.fontWeight || "400"};
  margin-top: ${(props) => (props.mt ? "10px" : "0px")};
  margin-bottom: ${(props) => (props.mb ? "10px" : "0px")};
  color: ${(props) => props.color || "black"};
`;

export const AuthorDiv = styled.div``;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 0px;
`;
