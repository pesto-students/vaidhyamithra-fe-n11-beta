import { useEffect, useState } from "react";
import TopicsList from "../../components/organisms/topicsList";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { homeMenuItems } from "./home.constants";
import { HomepageContainer } from "./home.styled";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getLatestTags } from "../../redux/features/home/home.slice";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(homeMenuItems[0].value);
  const { latestTopics } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestTags());
  }, [dispatch]);

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
        <TopicsList tags={latestTopics} title="Latest topics" />
      </RightSection>
    </HomepageContainer>
  );
};

export default Home;
