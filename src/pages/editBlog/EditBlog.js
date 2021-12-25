import { useEffect, useState } from "react";
import Button, { BUTTON_VARIANTS } from "../../components/atoms/button";
import { INPUT_VARIANTS } from "../../components/atoms/input";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import Editor from "../../components/organisms/editor";
import {
  EditBlogPage,
  EditorContainer,
  SaveButton,
  SaveSection,
  TitleInput,
} from "./editBlog.styled";
import validator from "validator";
import AddTags from "./AddTags";
import { useSelector } from "react-redux";
import {
  createBlog,
  resetBlogState,
} from "../../redux/features/blog/blog.slice";
import { alertTypes } from "../../components/molecules/snackbar";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/features/alerts/alerts.slice";
import { generatePath, matchPath, useLocation } from "react-router-dom";
import { ROUTES } from "../../values/routes";
import { useRouting } from "../../helpers";

const EditBlog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [topics, setTopics] = useState([]);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const { pathname } = useLocation();
  const { gotoRoute } = useRouting();

  const { isLoading, errorMessage, blogInfo } = useSelector(
    (state) => state.blog
  );
  const {
    userInfo: { id: userId },
  } = useSelector((state) => state.user);

  useEffect(() => {
    const validTitle = !validator.isEmpty(title);
    const validBlogContent =
      !validator.isEmpty(blogContent) && blogContent !== "<p><br></p>";

    const validFields = validTitle && validBlogContent; // && topics.length;
    setIsSaveDisabled(!validFields);
  }, [title, blogContent, topics.length]);

  // TODO: modify tags here
  const saveBlog = ({ status }) => {
    dispatch(
      createBlog({
        title,
        content: blogContent,
        tags: [],
        authorId: userId,
        status,
      })
    );
  };

  useEffect(() => {
    if (errorMessage) {
      dispatch(setAlert({ text: errorMessage, type: alertTypes.error }));
    }
  }, [dispatch, errorMessage]);

  useEffect(() => {
    if (blogInfo._id && matchPath(pathname, ROUTES.CREATE)) {
      dispatch(setAlert({ text: "Success!", type: alertTypes.success }));
      const blogPath = generatePath(ROUTES.BLOG, { blogId: blogInfo._id });
      gotoRoute(blogPath);
    }
  }, [dispatch, blogInfo, pathname, gotoRoute]);

  // cleaning up redux state!
  useEffect(() => {
    return () => {
      dispatch(resetBlogState());
    };
  }, [dispatch]);

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
          <Button
            loading={isLoading}
            disabled={isSaveDisabled}
            onClick={() => saveBlog({ status: "published" })}
          >
            Publish
          </Button>
          <SaveButton
            loading={isLoading}
            disabled={isSaveDisabled}
            variant={BUTTON_VARIANTS.OUTLINED}
            onClick={() => saveBlog({ status: "draft" })}
          >
            Save
          </SaveButton>
        </SaveSection>
        <AddTags topics={topics} setTopics={setTopics} />
      </RightSection>
    </EditBlogPage>
  );
};

export default EditBlog;
