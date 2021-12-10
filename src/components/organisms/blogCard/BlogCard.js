import manImg from "../../../images/man_img.png";
import { Card, CardContainer, Paragraph } from "./blogCard.styled";
import BloggerDetails from "../../molecules/bloggerDetails";
import BlogTag from "../../atoms/blogTag";

const BlogCard = () => {
  return (
    <Card>
      <img
        src={manImg}
        width="400px"
        height="320px"
        style={{ borderRadius: "10px" }}
      />
      <CardContainer>
        <BlogTag>NEUROSCIENCE</BlogTag>
        <Paragraph fontWeight="700" mt mb>
          We need to index the haptic GB card.
        </Paragraph>
        <Paragraph fontSize="16px" color="#718797" mt mb fontFamily="Inter">
          If we navigate the port, we can get to the AGP microchip through the
          bluetooth SDD alarm.
        </Paragraph>
        <BloggerDetails
          authorName="Darlene Robertson"
          publishedDate="March 12, 2021"
        />
      </CardContainer>
    </Card>
  );
};

export default BlogCard;
