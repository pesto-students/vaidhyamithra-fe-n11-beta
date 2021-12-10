import { AuthorDetails, AuthorDiv, Paragraph } from "./bloggerDetails.styled";
import manImg from "../../../images/man_img.png";

const BloggerDetails = ({ authorName, publishedDate }) => {
  return (
    <AuthorDetails>
      <img
        src={manImg}
        width="46px"
        height="46px"
        style={{ borderRadius: "50%", padding: "2px" }}
        alt="avatar"
      />
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
