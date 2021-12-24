import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import FIcon from "../../components/atoms/featherIcon";
import { INPUT_MARGINS, INPUT_VARIANTS } from "../../components/atoms/input";
import TopicsList from "../../components/organisms/topicsList";
import { SearchBar, SearchInput, AddCategoryBtn } from "./editBlog.styled";

const AddTags = ({ topics, setTopics }) => {
  const [searchTopicStr, setSearchTopicStr] = useState("");

  return (
    <>
      <SearchBar>
        <FIcon icon="search" />
        <SearchInput
          value={searchTopicStr}
          handleChange={(e) => setSearchTopicStr(e.target.value)}
          variant={INPUT_VARIANTS.STANDARD}
          placeholder="Add upto 3 categories"
          margin={INPUT_MARGINS.NONE}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchTopicStr("")}>
                <FIcon icon="x" />
              </IconButton>
            </InputAdornment>
          }
        />
        <AddCategoryBtn>Add</AddCategoryBtn>
      </SearchBar>
      <TopicsList />
    </>
  );
};

export default AddTags;
