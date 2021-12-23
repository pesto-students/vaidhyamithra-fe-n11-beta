import { useEffect, useState } from "react";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { SearchResultMenuItems } from "./search.constants";
import { ResultsContainer, SearchResults } from "./search.styled";
import TextFieldForSearch from "../../components/molecules/textFieldForSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSearchResults,
  search,
  updateHasMore,
  updateSearchText,
} from "../../redux/features/search/search.slice";

const Search = () => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(SearchResultMenuItems[0].value);
  const { searchText } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(removeSearchResults({ paginatedResults: [], totalCount: 0 }));
    if (searchText.length >= 3) {
      dispatch(search({ searchText: searchText, pageNumber: 1, pageSize: 5 }));
    }
  }, [dispatch, searchText]);

  const handleSearchTextChange = (text) => {
    dispatch(updateSearchText(text));
    if(text.length === 0)
      dispatch(updateHasMore(true));
  };

  return (
    <SearchResults>
      <ResultsContainer>
        <TextFieldForSearch
          handleChange={handleSearchTextChange}
          value={searchText}
          placeHolder="Search here"
        />
        <TabMenu
          value={currentTab}
          setValue={setCurrentTab}
          menuItems={SearchResultMenuItems}
        />
        {SearchResultMenuItems.map(({ value, component }) => (
          <TabPanel key={value} value={value} currentValue={currentTab}>
            {component}
          </TabPanel>
        ))}
      </ResultsContainer>
    </SearchResults>
  );
};

export default Search;
