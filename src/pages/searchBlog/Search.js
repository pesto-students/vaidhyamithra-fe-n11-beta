import { ResultsContainer, SearchResults } from "./search.styled";
import TextFieldForSearch from "../../components/molecules/textFieldForSearch";
import { useDispatch } from "react-redux";
import {
  resetSearch,
  updateSearchText,
} from "../../redux/features/search/search.slice";
import SearchResultsList from "./SearchResultsList";
import { debounce } from "../../utils/functions.utils";
import { useCallback, useEffect, useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [internalStr, setInternalStr] = useState("");

  // INTENTIONALLY kept the function deps empty -> returns the SAME function again!
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateStoreText = useCallback(
    debounce((text) => {
      dispatch(updateSearchText(text));
    }, 250),
    []
  );

  const handleSearchTextChange = (text) => {
    setInternalStr(text);
    updateStoreText(text);
  };

  // cleanup
  useEffect(() => {
    return () => {
      dispatch(resetSearch());
    };
  }, [dispatch]);

  return (
    <SearchResults>
      <ResultsContainer>
        <TextFieldForSearch
          handleChange={handleSearchTextChange}
          value={internalStr}
          placeHolder="Search here"
        />
        <SearchResultsList />
      </ResultsContainer>
    </SearchResults>
  );
};

export default Search;
