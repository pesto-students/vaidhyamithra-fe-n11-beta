import styled from "styled-components";
import Button from "../../components/atoms/button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  margin: auto;
  text-align: center;
  margin-top: 40px;
  padding: 20px;
`;

export const GoToHomepage = styled(Button)`
  margin-top: 60px;
`;
