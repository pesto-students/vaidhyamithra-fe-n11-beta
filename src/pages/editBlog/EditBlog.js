import { IconButton, InputAdornment } from "@mui/material";
import Button, { BUTTON_VARIANTS } from "../../components/atoms/button";
import FIcon from "../../components/atoms/featherIcon";
import { INPUT_MARGINS, INPUT_VARIANTS } from "../../components/atoms/input";
import Editor from "../../components/organisms/editor";
import RecommendedTopics from "../../components/organisms/recommendedTopics/RecommendedTopics";
import {
  EditBlogPage,
  EditorContainer,
  LeftSection,
  RightSection,
  SaveButton,
  SaveSection,
  TitleInput,
  SearchBar,
  SearchInput,
  AddCategoryBtn,
} from "./editBlog.styled";

const EditBlog = () => {
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
        <RecommendedTopics />
      </RightSection>
    </EditBlogPage>
  );
};

export default EditBlog;
