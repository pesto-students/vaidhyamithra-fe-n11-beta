import { IconButton, InputAdornment } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FIcon from "../../components/atoms/featherIcon";
import { INPUT_MARGINS, INPUT_VARIANTS } from "../../components/atoms/input";
import TopicsList from "../../components/organisms/topicsList";
import {
  createTag,
  removeSearchTagsResult,
  searchTags,
  updateSearchTagsResult,
} from "../../redux/features/search/search.slice";
import { SearchBar, SearchInput, AddCategoryBtn } from "./editBlog.styled";

const AddTags = ({ topics, setTopics }) => {
  const [searchTopicStr, setSearchTopicStr] = useState("");
  const dispatch = useDispatch();
  const { tags, isLoading } = useSelector((state) => state.search);

  const handleTextChange = (value) => {
    setSearchTopicStr(value);
    if (value.length > 2) {
      dispatch(searchTags({ tagName: value }));
      return;
    }
  };

  const reset = () => {
    setSearchTopicStr("");
    dispatch(removeSearchTagsResult());
  };

  const handleSelectTag = (tagName) => {
    if (topics.find((tag) => tag === tagName)) return;
    if (topics.length >= 3) return;
    setTopics([...topics, tagName]);
    handleDeleteTag(tags, tagName, true);
  };

  const Add = () => {
    dispatch(createTag({ tagName: searchTopicStr }))
      .unwrap()
      .then((result) => {
        setTopics([...topics, result.tagName]);
        reset();
      });
  };

  const handleRemoveTag = (tagName) => {
    handleDeleteTag(topics, tagName, false);
  };

  const handleDeleteTag = (fromTagArray, tagName, requireDispatch) => {
    let indx = fromTagArray.findIndex((tag) => tag === tagName);
    if (indx !== -1) {
      let tagsCopy = [...fromTagArray];
      tagsCopy.splice(indx, 1);
      if (requireDispatch) {
        dispatch(updateSearchTagsResult(tagsCopy));
        return;
      }
      setTopics(tagsCopy);
    }
  };

  return (
    <>
      <SearchBar>
        <FIcon icon="search" />
        <SearchInput
          value={searchTopicStr}
          handleChange={(e) => handleTextChange(e.target.value)}
          variant={INPUT_VARIANTS.STANDARD}
          placeholder="Add upto 3 categories"
          margin={INPUT_MARGINS.NONE}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={reset}>
                <FIcon icon="x" />
              </IconButton>
            </InputAdornment>
          }
          disabled={topics.length >= 3}
        />
        {!!searchTopicStr.length &&
          !topics.includes(searchTopicStr) &&
          !tags.includes(searchTopicStr) &&
          topics.length < 3 && (
            <AddCategoryBtn onClick={Add}>Add</AddCategoryBtn>
          )}
      </SearchBar>
      <TopicsList
        tags={tags.filter((tagName) => !topics.includes(tagName))}
        isLoading={isLoading}
        handleClick={(tagName) => handleSelectTag(tagName)}
      />
      <TopicsList
        tags={topics}
        selected
        handleClick={(tagName) => handleRemoveTag(tagName)}
      />
    </>
  );
};

export default AddTags;
