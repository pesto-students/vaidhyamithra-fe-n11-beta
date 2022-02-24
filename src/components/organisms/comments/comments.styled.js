import styled from "styled-components";

export const CommentsCount = styled.div`
  border-bottom: 1px solid;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: Inter;
  padding: 10px;
`;

export const AddComment = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SeeAllComments = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const CommentContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const BloggerDetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  color: #ea4335;
  display: flex;
  align-items: end;
`;
