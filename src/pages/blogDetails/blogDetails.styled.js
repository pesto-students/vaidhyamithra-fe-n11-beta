import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: ${(props) => props.fontFamily || "Amiko"};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height: 1.2;
  font-weight: ${(props) => props.fontWeight || "400"};
  margin-top: ${(props) => (props.mt ? "26px" : "0px")};
  margin-bottom: ${(props) => (props.mb ? "10px" : "0px")};
  color: ${(props) => props.color || "black"};
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const DetailsContainer = styled.div`
  max-width: 740px;
  padding-bottom: 20px;
`;

export const TagSection = styled.section`
  margin-top: 36px;
  display: inline-flex;
  gap: 10px;
`;

