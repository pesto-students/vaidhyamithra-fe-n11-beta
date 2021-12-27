import { ResultsContainer, SearchResults } from "./search.styled";
import TextFieldForSearch from "../../components/molecules/textFieldForSearch";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchText } from "../../redux/features/search/search.slice";
import SearchResultsList from "./SearchResultsList";

const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.search);

  const handleSearchTextChange = (text) => {
    dispatch(updateSearchText(text));
  };

  return (
    <SearchResults>
      <ResultsContainer>
        <TextFieldForSearch
          handleChange={handleSearchTextChange}
          value={searchText}
          placeHolder="Search here"
        />
        <SearchResultsList />
      </ResultsContainer>
    </SearchResults>
  );
};

export default Search;
