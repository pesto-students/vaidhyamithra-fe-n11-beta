import {
  AuthorDetails,
  AuthorDiv,
  Paragraph,
  BlogPreviewImg,
} from "./bloggerDetails.styled";
import manImg from "../../../images/man_img.png";
import { generatePath } from "react-router-dom";
import { ROUTES } from "../../../values/routes";
import { useRouting } from "../../../helpers";

const BloggerDetails = ({ authorDetails: { _id, name }, publishedDate }) => {
  const { gotoRoute } = useRouting();

  const formattedDate = new Date(publishedDate).toLocaleDateString(
    {},
    { timeZone: "UTC", month: "long", day: "2-digit", year: "numeric" }
  );

  const profileLink = generatePath(ROUTES.PROFILE, { userId: _id });

  const gotoProfile = () => gotoRoute(profileLink);

  return (
    <AuthorDetails>
      <BlogPreviewImg src={manImg} alt="avatar-img" onClick={gotoProfile} />
      <AuthorDiv>
        <Paragraph
          fontSize="16px"
          fontWeight="700"
          fontFamily="Inter"
          cursor="pointer"
          onClick={gotoProfile}
        >
          {name}
        </Paragraph>
        <Paragraph fontSize="12px" color="#718797" fontFamily="Inter" mt>
          {publishedDate ? formattedDate : ""}
        </Paragraph>
      </AuthorDiv>
    </AuthorDetails>
  );
};

BloggerDetails.defaultProps = {
  authorDetails: {
    _id: "",
    name: "",
  },
};

export default BloggerDetails;
