import PropTypes from "prop-types";
import Typography from "../../atoms/typography";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import { TopicsContainer, ButtonsContainer } from "./topicsList.styled";
import Ficon from "../../atoms/featherIcon";
import { useRouting } from "../../../helpers";
import { ROUTES } from "../../../values/routes";
import { generatePath } from "react-router-dom";

const TopicsList = ({ title, tags, isLoading, handleClick, selected }) => {
  const { gotoRoute } = useRouting();

  // Default behaviour routing to tag page
  if (!handleClick) {
    handleClick = (tag) => {
      const tagPath = generatePath(ROUTES.BLOGS_BY_TAG, { tagName: tag });
      gotoRoute(tagPath);
    };
  }

  return (
    <TopicsContainer>
      {isLoading === true ? (
        <>loading...</>
      ) : (
        <>
          <Typography variant="h3">{title}</Typography>
          <ButtonsContainer>
            {tags &&
              tags.map((tagName, key) => (
                <Button
                  key={key}
                  variant={
                    selected
                      ? BUTTON_VARIANTS.CONTAINED
                      : BUTTON_VARIANTS.OUTLINED
                  }
                  sx={{ mr: "0.625rem", mb: "0.625rem" }}
                  onClick={() => handleClick(tagName)}
                >
                  <>
                    {selected && <Ficon icon="x" />}
                    {tagName}
                  </>
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
  selected: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  handleClick: PropTypes.func,
};

TopicsList.defaultProps = {
  title: "",
  selected: false,
  tags: [],
  isLoading: false,
  handleClick: null,
};

export default TopicsList;
