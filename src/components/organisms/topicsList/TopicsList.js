import PropTypes from "prop-types";
import Typography from "../../atoms/typography";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import { TopicsContainer, ButtonsContainer } from "./topicsList.styled";

const TopicsList = ({ title }) => {
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
      <Typography variant="h3">{title}</Typography>
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

TopicsList.propTypes = {
  title: PropTypes.string,
};

TopicsList.defaultProps = {
  title: "",
};

export default TopicsList;
