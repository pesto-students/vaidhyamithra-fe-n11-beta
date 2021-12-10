import { Divider } from "@mui/material";
import { useState } from "react";
import RecommendedTopics from "../../components/organisms/recommendedTopics/RecommendedTopics";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { homeMenuItems } from "./home.constants";
import { LeftSection, RightSection, HomepageContainer } from "./home.styled";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(homeMenuItems[0].value);

  return (
    <HomepageContainer>
      <LeftSection>
        <TabMenu
          value={currentTab}
          setValue={setCurrentTab}
          menuItems={homeMenuItems}
        />
        {homeMenuItems.map(({ value, component }) => (
          <TabPanel key={value} value={value} currentValue={currentTab}>
            {component}
          </TabPanel>
        ))}
      </LeftSection>
      <Divider orientation="vertical" />
      <RightSection>
        <RecommendedTopics />
      </RightSection>
    </HomepageContainer>
  );
};

export default Home;
