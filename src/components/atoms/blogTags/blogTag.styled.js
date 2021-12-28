import styled from "styled-components";

export const Topic = styled.div`
  background: #65946a;
  text-align: center;
  color: white;
  border-radius: 16px;
  font-size: 12px;
  letter-spacing: 1.2px;
  width: max-content;
  padding: 2px 8px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;

  & ~ & {
    margin-left: 4px;
  }
`;

export const TagsList = styled.div`
  display: flex;
`;
