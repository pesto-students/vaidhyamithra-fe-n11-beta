import {
  AuthorDetails,
  AuthorDiv,
  Paragraph,
  BlogPreviewImg,
} from "./bloggerDetails.styled";
import manImg from "../../../images/man_img.png";

const BloggerDetails = ({ authorName, publishedDate }) => {
  return (
    <AuthorDetails>
      <BlogPreviewImg src={manImg} alt="avatar-img" />
      <AuthorDiv>
        <Paragraph fontSize="16px" fontWeight="700" fontFamily="Inter">
          {authorName}
        </Paragraph>
        <Paragraph fontSize="12px" color="#718797" fontFamily="Inter" mt>
          {publishedDate}
        </Paragraph>
      </AuthorDiv>
    </AuthorDetails>
  );
};

export default BloggerDetails;
