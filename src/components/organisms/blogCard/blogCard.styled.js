import styled from "styled-components";

export const Card = styled.div`
  display: inline-flex;
  gap: 37.4px;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  width: 800px;
  height: 350px;
  background: #FFFFF;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 25%);
`;

export const CardContainer = styled.div`
  width: 330px;
  padding-top: 40px;
  position: relative;
`;

export const BloggerDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 0px;
`;

export const BloggerImg = styled.div`
  border: 1px solid;
  border-radius: 50%;
  padding: 2px;
`;

export const TopicTag = styled.div`
  background: #65946a;
  text-align: center;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.5px;
  display: inline-block;
  padding: 4px 8px;
`;

export const AuthorDiv = styled.div``;

export const Image = styled.img`
  width="400px";
  height="320px";
  borderRadius: "10px";
`;

export const AuthorImg = styled.img`
  width="46px";
  height="46px";
  borderRadius: "50%";
  padding: "2px";
`;

export const Paragraph = styled.p`
  font-family: ${props => props.fontFamily || "Amiko"};
  font-size: ${props => props.fontSize || "24px"};
  line-height: 1.2;
  font-weight: ${props => props.fontWeight || '400'};
  margin-top: ${props => props.mt ? "10px": "0px"};
  margin-bottom: ${props => props.mb ? "10px": "0px"};
  color: ${props => props.color || "black"}
`;
