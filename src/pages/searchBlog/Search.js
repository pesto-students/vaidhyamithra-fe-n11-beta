import { useState } from "react";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { SearchResultMenuItems } from "./search.constants";
import {
  ResultsContainer,
  SearchResults,
  SearchTerm,
  Title,
} from "./search.styled";

const Search = () => {
  const [currentTab, setCurrentTab] = useState(SearchResultMenuItems[0].value);

  return (
    <SearchResults>
      <ResultsContainer>
        <Title>
          Search results for <SearchTerm>'blood'</SearchTerm>
        </Title>
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
