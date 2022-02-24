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
  SelectedImage,
  DescriptionSection,
  ImagePreviewContainer,
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
import InputField from "../../components/atoms/input/InputField";
import Ficon from "../../components/atoms/featherIcon/FeatherIcon";
import { uploadImage } from "../../redux/features/imageHandler/imageHandler.slice";

const EditBlog = ({ isCreateMode }) => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [description, setDescription] = useState("");
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

  const [selectedImage, setSelectedImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // fetching blog if blogId is set
  useEffect(() => {
    dispatch(resetBlogState());
    if (blogId) {
      dispatch(getBlog({ blogId }))
        .unwrap()
        .then(([{ content, title, tags, description, imgUrl }]) => {
          setBlogTitle(title);
          setBlogContent(content);
          setBlogTags(tags);
          setImageUrl(imgUrl);
          setDescription(description);
        })
        .catch((err) => console.log(err));
    }
  }, [blogId, dispatch]);

  // validation
  useEffect(() => {
    const validTitle = !validator.isEmpty(blogTitle);
    const validBlogContent =
      !validator.isEmpty(blogContent) && blogContent !== "<p><br></p>";
    const validDescription = !validator.isEmpty(description);

    const validFields =
      validTitle && validBlogContent && blogTags.length && validDescription;
    setIsSaveDisabled(!validFields);
  }, [blogContent, blogTags, blogTitle, description, imageUrl]);

  const saveBlog = ({ status }) => {
    const saveFn = isCreateMode ? createBlog : updateBlog;
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "eeduaqeu");
    dispatch(uploadImage(formData)).then((res) => {
      // console.log("Image response:", res);
      dispatch(
        saveFn({
          title: blogTitle,
          content: blogContent,
          tags: blogTags,
          authorId: userId,
          description: description,
          imgUrl: res.payload.secure_url,
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
    });
  };

  const previewImg = (event) => {
    console.log("Image in preview:", event.target.files);
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(event.target.files[0]);
      setImageUrl(src);
    }
  };

  // cleaning up redux state!
  useEffect(() => {
    dispatch(resetBlogState());
    setBlogTitle("");
    setBlogContent("");
    setDescription("");
    setImageUrl("");
    setSelectedImage("");
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
          required
          value={blogTitle}
          handleChange={(e) => setBlogTitle(e.target.value)}
          variant={INPUT_VARIANTS.STANDARD}
          placeholder="Blog title *"
          multiline
        />
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={(e) => previewImg(e)}
          />
          <Button color="secondary" variant="contained" component="span">
            <Ficon icon="plus"></Ficon>{" "}
            {`${isCreateMode ? "Add" : "Update"} Preview Image`}
          </Button>
        </label>
        <ImagePreviewContainer>
          {imageUrl?.length > 0 ? (
            <SelectedImage src={imageUrl} alt="Selected image preview" />
          ) : (
            <>No image selected</>
          )}
        </ImagePreviewContainer>
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
        <DescriptionSection>
          <InputField
            required
            label="Description of Blog"
            value={description}
            handleChange={(e) => setDescription(e.target.value)}
            placeholder="Write short description for blog"
            multiline
            fullWidth
          />
        </DescriptionSection>
        <AddTags topics={blogTags} setTopics={setBlogTags} />
      </RightSection>
    </EditBlogPage>
  );
};

EditBlog.defaultProps = {
  isCreateMode: false,
};

export default EditBlog;
