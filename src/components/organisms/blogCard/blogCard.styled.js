import styled from "styled-components";
import { withTheme } from "@emotion/react";
import { COLORS } from "../../../styles/colors";

export const Card = withTheme(styled("div")`
  display: flex;
  padding: 20px 0;
  background: ${({ theme }) => theme.palette.background.paper};
  min-width: 600px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  justify-content: space-between;

  &:last-of-type {
    border-bottom: none;
  }
`);

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "65%")};
`;

export const BlogImg = styled.img`
  object-fit: cover;
  width: 35%;
  max-height: 200px;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
`;

export const BlogTitle = styled.h2`
  color: black;
  line-height: 1.4;
  margin: 12px 0 8px;
  font-weight: 700;
  font-size: 24px;
  font-family: Amiko;

  cursor: pointer;

  /* line clamping - show limited number of lines */
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical; */
`;

export const BlogContent = styled.div`
  color: ${COLORS.SLATE_GRAY};
  font-size: 16px;
  margin: 0;
  font-family: Inter;

  cursor: pointer;

  /* line clamping - show limited number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  * {
    font-size: 16px;
    font-weight: normal;
    margin: 4px 0;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
`;
