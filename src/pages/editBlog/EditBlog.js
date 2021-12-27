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
  LoaderContainer,
  SaveButton,
  SaveSection,
  TitleInput,
} from "./editBlog.styled";
import validator from "validator";
import AddTags from "./AddTags";
import { useSelector } from "react-redux";
import {
  createBlog,
  getBlog,
  resetBlogState,
  updateBlog,
} from "../../redux/features/blog/blog.slice";
import { alertTypes } from "../../components/molecules/snackbar";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/features/alerts/alerts.slice";
import { generatePath, useParams } from "react-router-dom";
import { ROUTES } from "../../values/routes";
import { useRouting } from "../../helpers";
import PageNotFound from "../pageNotFound";
import { CircularProgress } from "../../components/atoms/progress";
import { BLOG_STATUS } from "./editBlog.constants";

const EditBlog = ({ isCreateMode }) => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogTags, setBlogTags] = useState([]);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const { gotoRoute } = useRouting();

  const {
    isLoading,
    errorMessage,
    blogInfo: { authorId, content, status: currentStatus },
  } = useSelector((state) => state.blog);
  const {
    userInfo: { id: userId, isDoctor },
  } = useSelector((state) => state.user);

  // fetching blog if blogId is set
  useEffect(() => {
    dispatch(resetBlogState());
    if (blogId) {
      dispatch(getBlog({ blogId }))
        .unwrap()
        .then(([{ content, title, tags }]) => {
          setBlogTitle(title);
          setBlogContent(content);
          setBlogTags(tags);
        })
        .catch((err) => console.log(err));
    }
  }, [blogId, dispatch]);

  // validation
  useEffect(() => {
    const validTitle = !validator.isEmpty(blogTitle);
    const validBlogContent =
      !validator.isEmpty(blogContent) && blogContent !== "<p><br></p>";

    const validFields = validTitle && validBlogContent && blogTags.length;
    setIsSaveDisabled(!validFields);
  }, [blogContent, blogTags, blogTitle]);

  const saveBlog = ({ status }) => {
    const saveFn = isCreateMode ? createBlog : updateBlog;
    dispatch(
      saveFn({
        title: blogTitle,
        content: blogContent,
        tags: blogTags,
        authorId: userId,
        status,
        ...(isCreateMode ? {} : { blogId }),
      })
    )
      .unwrap()
      .then(({ _id }) => {
        if (_id) {
          dispatch(setAlert({ text: "Success!", type: alertTypes.success }));
          const blogPath = generatePath(
            status === BLOG_STATUS.DRAFT ? ROUTES.EDIT_BLOG : ROUTES.BLOG,
            { blogId: _id }
          );
          gotoRoute(blogPath);
        }
      })
      .catch(() => {
        dispatch(setAlert({ text: errorMessage, type: alertTypes.error }));
      });
  };

  // cleaning up redux state!
  useEffect(() => {
    dispatch(resetBlogState());
    setBlogTitle("");
    setBlogContent("");
    setBlogTags([]);

    return () => {
      dispatch(resetBlogState());
    };
  }, [isCreateMode, dispatch]);

  if (!isDoctor || (authorId && authorId !== userId)) {
    return <PageNotFound />;
  }

  if (isLoading) {
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );
  }

  return (
    <EditBlogPage>
      <LeftSection>
        <TitleInput
          value={blogTitle}
          handleChange={(e) => setBlogTitle(e.target.value)}
          variant={INPUT_VARIANTS.STANDARD}
          placeholder="Blog title here"
          multiline
        />
        <EditorContainer>
          <Editor initialContent={content} handleChange={setBlogContent} />
        </EditorContainer>
      </LeftSection>
      <RightSection>
        <SaveSection>
          <Button
            loading={isLoading}
            disabled={isSaveDisabled}
            onClick={() => saveBlog({ status: BLOG_STATUS.PUBLISHED })}
          >
            Publish
          </Button>
          {currentStatus !== BLOG_STATUS.PUBLISHED && (
            <SaveButton
              loading={isLoading}
              disabled={isSaveDisabled}
              variant={BUTTON_VARIANTS.OUTLINED}
              onClick={() => saveBlog({ status: BLOG_STATUS.DRAFT })}
            >
              Save draft
            </SaveButton>
          )}
        </SaveSection>
        <AddTags topics={blogTags} setTopics={setBlogTags} />
      </RightSection>
    </EditBlogPage>
  );
};

EditBlog.defaultProps = {
  isCreateMode: false,
};

export default EditBlog;
