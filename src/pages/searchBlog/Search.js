import { useState } from "react";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { SearchResultMenuItems } from "./search.constants";
import { ResultsContainer, SearchResults } from "./search.styled";
import TextFieldForSearch from "../../components/molecules/textFieldForSearch";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(SearchResultMenuItems[0].value);
  const handleTextChange = (value) => {
    console.log("Value is here:", value);
  }
  return (
    <SearchResults>
      <ResultsContainer>
        <TextFieldForSearch placeHolder="Search here" handleTextChange={(value) => handleTextChange(value)}/>
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
