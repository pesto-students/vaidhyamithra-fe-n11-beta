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
import { useAuth } from "../../helpers";
import LatestBlogs from "./LatestBlogs";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(homeMenuItems[0].value);
  const { latestTopics } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(getLatestTags());
  }, [dispatch]);

  return (
    <HomepageContainer>
      <LeftSection>
        {isLoggedIn ? (
          <>
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
          </>
        ) : (
          <LatestBlogs />
        )}
      </LeftSection>
      <RightSection>
        <TopicsList tags={latestTopics} title="Latest topics" />
      </RightSection>
    </HomepageContainer>
  );
};

export default Home;
