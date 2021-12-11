import { useState } from "react";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { SearchResultMenuItems } from "./searchBlog.constants";

const SearchBlog = () => {
  const [currentTab, setCurrentTab] = useState(SearchResultMenuItems[0].value);
  return (
    <div>
      <div>Search results for 'blood'</div>
      <div>
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
      </div>
    </div>
  );
};

export default SearchBlog;
