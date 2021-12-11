import Editor from "../../components/organisms/editor";
import { EditBlogPage, EditorContainer } from "./editBlog.styled";

const EditBlog = () => {
  return (
    <EditBlogPage>
      <EditorContainer>
        <Editor />
      </EditorContainer>
    </EditBlogPage>
  );
};

export default EditBlog;
