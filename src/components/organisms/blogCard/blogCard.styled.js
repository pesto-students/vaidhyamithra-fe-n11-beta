import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Card = styled.div`
  display: inline-flex;
  gap: ${(props) => (props.requiredColumnCard ? "" : "36.4px")};
  border-radius: 10px;
  padding: 20px;
  margin: ${(props) => (props.requiredColumnCard ? "0rem" : "1rem")};
  background: #ffff;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 25%);
  flex-direction: ${(props) => (props.requiredColumnCard ? "column" : "row")};
`;

export const CardContainer = styled.div`
  width: ${(props) => (props.requiredColumnCard ? "310px" : "330px")};
  padding-top: 40px;
  position: relative;
`;

export const BlogImg = styled.img`
  width: ${(props) => (props.requiredColumnCard ? "310px" : "400px")};
  height: ${(props) => (props.requiredColumnCard ? "300px" : "320px")};
  border-radius: 10px;
`;

export const BlogTitle = styled.h2`
  color: black;
  line-height: 1.4;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 700;
  font-size: 24px;
  font-family: Amiko;
`;

export const BlogContent = styled.p`
  color: ${COLORS.SLATE_GRAY};
  font-size: 16px;
  margin-bottom: 10px;
  font-family: Inter;
`;
