import { useState } from "react";
import TopicsList from "../../components/organisms/topicsList";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { homeMenuItems } from "./home.constants";
import { HomepageContainer } from "./home.styled";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";

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
      <RightSection>
        <TopicsList title="Latest topics" />
      </RightSection>
    </HomepageContainer>
  );
};

export default Home;
