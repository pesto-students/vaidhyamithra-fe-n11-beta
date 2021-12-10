import manImg from "../../../images/man_img.png";
import {
  Card,
  CardContainer,
  BloggerDetails,
  TopicTag,
  AuthorDiv,
  Paragraph,
} from "./blogCard.styled";

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
        <TopicTag>NEUROSCIENCE</TopicTag>
        <Paragraph fontWeight="700" mt mb>
          We need to index the haptic GB card.
        </Paragraph>
        <Paragraph fontSize="16px" color="#718797" mt mb fontFamily="Inter">
          If we navigate the port, we can get to the AGP microchip through the
          bluetooth SDD alarm.
        </Paragraph>
        <BloggerDetails>
          <img
            src={manImg}
            width="46px"
            height="46px"
            style={{ borderRadius: "50%", padding: "2px" }}
          />
          <AuthorDiv>
            <Paragraph fontSize="16px" fontWeight="700" fontFamily="Inter">
              Darlene Robertson
            </Paragraph>
            <Paragraph fontSize="12px" color="#718797" fontFamily="Inter" mt>
              March 12, 2021
            </Paragraph>
          </AuthorDiv>
        </BloggerDetails>
      </CardContainer>
    </Card>
  );
};

export default BlogCard;
