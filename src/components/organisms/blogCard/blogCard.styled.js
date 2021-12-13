import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Card = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  background: #ffff;
  box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
  min-width: 600px;
  min-height: 350px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 25%);
  }
`;

export const CardContainer = styled.div`
  margin: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
`;

export const BlogImg = styled.img`
  object-fit: cover;
  width: 40%;
  max-height: 300px;
  border-radius: 10px;
`;

export const BlogTitle = styled.h2`
  color: black;
  line-height: 1.4;
  margin: 12px 0 8px;
  font-weight: 700;
  font-size: 24px;
  font-family: Amiko;

  /* line clamping - show limited number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BlogContent = styled.p`
  color: ${COLORS.SLATE_GRAY};
  font-size: 16px;
  margin: 0;
  font-family: Inter;

  /* line clamping - show limited number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const AuthorInfo = styled.div`
  margin-top: auto;
`;
