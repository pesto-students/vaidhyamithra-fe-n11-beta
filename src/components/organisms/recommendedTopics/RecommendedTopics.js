import Typography from "../../atoms/typography";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import { TopicsContainer, ButtonsContainer } from "./recommendedTopics.styled";

const RecommendedTopics = () => {
  const topics = [
    { id: 1, topicName: "Cardiology" },
    { id: 2, topicName: "Bariatrics" },
    { id: 3, topicName: "Endocrinology" },
    { id: 4, topicName: "Hematology" },
    { id: 5, topicName: "Gastroenterology" },
    { id: 6, topicName: "Immunology" },
  ];
  return (
    <TopicsContainer>
      <Typography variant="h3">Recommended topics</Typography>
      <ButtonsContainer>
        {topics.map((topic, key) => (
          <Button
            key={key}
            variant={BUTTON_VARIANTS.OUTLINED}
            sx={{ mr: "0.625rem", mb: "0.625rem" }}
          >
            {topic.topicName}
          </Button>
        ))}
      </ButtonsContainer>
    </TopicsContainer>
  );
};

export default RecommendedTopics;
