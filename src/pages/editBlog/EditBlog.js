import { IconButton, InputAdornment } from "@mui/material";
import { useEffect } from "react";
import Button, { BUTTON_VARIANTS } from "../../components/atoms/button";
import FIcon from "../../components/atoms/featherIcon";
import { INPUT_MARGINS, INPUT_VARIANTS } from "../../components/atoms/input";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import Editor from "../../components/organisms/editor";
import TopicsList from "../../components/organisms/topicsList";
import { useAuth, useRouting } from "../../helpers";
import { ROUTES } from "../../values/routes";
import {
  EditBlogPage,
  EditorContainer,
  SaveButton,
  SaveSection,
  TitleInput,
  SearchBar,
  SearchInput,
  AddCategoryBtn,
} from "./editBlog.styled";

const EditBlog = () => {
  const { isLoggedIn } = useAuth();
  const { gotoRoute } = useRouting();

  useEffect(() => {
    if (!isLoggedIn) {
      gotoRoute(ROUTES.HOME);
    }
  }, [gotoRoute, isLoggedIn]);

  return (
    <EditBlogPage>
      <LeftSection>
        <TitleInput
          variant={INPUT_VARIANTS.STANDARD}
          placeholder="Blog title here"
          multiline
        />
        <EditorContainer>
          <Editor />
        </EditorContainer>
      </LeftSection>
      <RightSection>
        <SaveSection>
          <Button>Publish</Button>
          <SaveButton variant={BUTTON_VARIANTS.OUTLINED}>Save</SaveButton>
        </SaveSection>
        <SearchBar>
          <FIcon icon="search" />
          <SearchInput
            variant={INPUT_VARIANTS.STANDARD}
            placeholder="Add category"
            margin={INPUT_MARGINS.NONE}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => console.log("close")}>
                  <FIcon icon="x" />
                </IconButton>
              </InputAdornment>
            }
          />
          <AddCategoryBtn>Add</AddCategoryBtn>
        </SearchBar>
        <TopicsList />
      </RightSection>
    </EditBlogPage>
  );
};

export default EditBlog;
