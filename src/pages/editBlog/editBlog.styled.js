import { withTheme } from "@emotion/react";
import styled from "styled-components";
import Button from "../../components/atoms/button";
import InputField from "../../components/atoms/input/InputField";

export const EditBlogPage = styled.div`
  display: flex;
`;

export const TitleInput = withTheme(styled(InputField)`
  width: 100%;
  margin-bottom: 20px;

  textarea {
    font-weight: 700;
    font-size: 30px;
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
    line-height: 40px;
  }
`);

export const EditorContainer = styled.div`
  margin-top: 20px;
  height: calc(100% - 70px);
  overflow: auto;
`;

export const SaveButton = styled(Button)`
  margin-left: 8px !important;
`;

export const SaveSection = styled.div``;

export const SearchBar = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const SearchInput = withTheme(styled(InputField)`
  margin-left: 8px !important;
`);

export const AddCategoryBtn = styled(Button)`
  margin-left: 8px !important;
`;
