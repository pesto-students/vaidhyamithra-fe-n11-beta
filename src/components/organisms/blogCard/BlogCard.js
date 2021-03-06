import {
  Card,
  CardContainer,
  BlogImg,
  BlogTitle,
  BlogContent,
  AuthorInfo,
} from "./blogCard.styled";
import BloggerDetails from "../../molecules/bloggerDetails";
import BlogTags from "../../atoms/blogTags";
import { generatePath } from "react-router-dom";
import { ROUTES } from "../../../values/routes";
import { useRouting } from "../../../helpers";
import Bookmark from "../../molecules/bookmark";

const BlogCard = ({
  _id,
  tags,
  title,
  description,
  style,
  authorDetails,
  updatedAt,
  imgUrl,
}) => {
  const blogRoute = generatePath(ROUTES.BLOG, { blogId: _id });
  const { gotoRoute } = useRouting();

  return (
    <Card style={{ ...style }}>
      <CardContainer fullWidth={!imgUrl}>
        <BlogTags tags={tags} />
        <BlogTitle onClick={() => gotoRoute(blogRoute)}>{title}</BlogTitle>
        <BlogContent onClick={() => gotoRoute(blogRoute)}>
          {description}
        </BlogContent>
        <AuthorInfo>
          <BloggerDetails
            authorDetails={authorDetails}
            publishedDate={updatedAt}
          />
          <Bookmark blogId={_id} />
        </AuthorInfo>
      </CardContainer>
      {imgUrl && (
        <BlogImg
          onClick={() => gotoRoute(blogRoute)}
          src={imgUrl}
          alt="blog-preview"
        />
      )}
    </Card>
  );
};

BlogCard.defaultProps = {
  _id: "",
  tags: ["neuroscience"],
  title: "We need to index the haptic GB card",
  content:
    "If we navigate the port, we can get to the AGP microchip through the bluetooth SDD alarm of the name of the universe. And if we navigate the port, we can get to the AGP microchip through the bluetooth SDD alarm. I were you and you were me then what would this world be like",
  imgUrl: "",
  authorDetails: {
    _id: "",
    name: "Darlene Robertson",
    imgUrl: "",
  },
  updatedAt: new Date(),
};

export default BlogCard;
