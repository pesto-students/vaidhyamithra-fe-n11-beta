import styled from "styled-components";
import Button from "../../components/atoms/button";

export const BlogTitle = styled.h1`
  color: black;
  font-family: Amiko;
  margin-bottom: 10px;
`;

export const BloggerDetailsSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const DetailsContainer = styled.div`
  max-width: 850px;
  padding-bottom: 20px;
  min-width: 600px;
`;

export const TagSection = styled.section`
  margin: 24px 0 36px;
`;

export const BlogImg = styled.img`
  width: 722px;
  padding: 2px;
`;

export const CommentSection = styled.div`
  border-bottom: 1px solid;
`;

export const BlogContent = styled.div``;

export const EditBlogBtn = styled(Button)`
  margin-bottom: auto;
  margin-left: auto;
`;
