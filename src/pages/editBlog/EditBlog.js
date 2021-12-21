import { useEffect, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Button, { BUTTON_VARIANTS } from "../../components/atoms/button";
import FIcon from "../../components/atoms/featherIcon";
import { INPUT_MARGINS, INPUT_VARIANTS } from "../../components/atoms/input";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import Editor from "../../components/organisms/editor";
import TopicsList from "../../components/organisms/topicsList";
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
import validator from "validator";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [searchTopicStr, setSearchTopicStr] = useState("");

  useEffect(() => {
    const validTitle = !validator.isEmpty(title);
    const validBlogContent =
      !validator.isEmpty(blogContent) && blogContent !== "<p><br></p>";

    const validFields = validTitle && validBlogContent;
    setIsSaveDisabled(!validFields);
  }, [title, blogContent]);

  return (
    <EditBlogPage>
      <LeftSection>
        <TitleInput
          value={title}
          handleChange={(e) => setTitle(e.target.value)}
          variant={INPUT_VARIANTS.STANDARD}
          placeholder="Blog title here"
          multiline
        />
        <EditorContainer>
          <Editor handleChange={setBlogContent} />
        </EditorContainer>
      </LeftSection>
      <RightSection>
        <SaveSection>
          <Button disabled={isSaveDisabled}>Publish</Button>
          <SaveButton
            disabled={isSaveDisabled}
            variant={BUTTON_VARIANTS.OUTLINED}
          >
            Save
          </SaveButton>
        </SaveSection>
        <SearchBar>
          <FIcon icon="search" />
          <SearchInput
            value={searchTopicStr}
            handleChange={(e) => setSearchTopicStr(e.target.value)}
            variant={INPUT_VARIANTS.STANDARD}
            placeholder="Add upto 3 categories"
            margin={INPUT_MARGINS.NONE}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setSearchTopicStr("")}>
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
