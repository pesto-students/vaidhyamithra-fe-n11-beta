import PropTypes from "prop-types";
import Typography from "../../atoms/typography";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import { TopicsContainer, ButtonsContainer } from "./topicsList.styled";

const TopicsList = ({ title, tags, isLoading, handleClick, selected }) => {
  return (
    <TopicsContainer>
      {isLoading === true ? (
        <>loading...</>
      ) : (
        <>
          <Typography variant="h3">{title}</Typography>
          <ButtonsContainer>
            {tags && tags.map((tagName, key) => (
              <Button
                key={key}
                variant={selected ?  BUTTON_VARIANTS.CONTAINED : BUTTON_VARIANTS.OUTLINED}
                sx={{ mr: "0.625rem", mb: "0.625rem" }}
                onClick={() => handleClick(tagName)}
              >
                {tagName}
              </Button>
            ))}
          </ButtonsContainer>
        </>
      )}
    </TopicsContainer>
  );
};

TopicsList.propTypes = {
  title: PropTypes.string,
};

TopicsList.defaultProps = {
  title: "",
  selected: false,
  tags:["blood", "heart", "brain", "neurology"]
};

export default TopicsList;
