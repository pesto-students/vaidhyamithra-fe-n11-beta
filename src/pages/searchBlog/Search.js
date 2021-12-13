import { useState } from "react";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { SearchResultMenuItems } from "./search.constants";
import {
  ResultsContainer,
  SearchResults
} from "./search.styled";
import TextFieldForSearch from "../../components/molecules/textFieldForSearch";
const Search = () => {
  const [currentTab, setCurrentTab] = useState(SearchResultMenuItems[0].value);

  return (
    <SearchResults>
      <ResultsContainer>
        <TextFieldForSearch 
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
