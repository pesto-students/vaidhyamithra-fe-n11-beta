import { useEffect, useState } from "react";
import manImg from "../../images/man_img.png";
import {
  ProfileContainer,
  ProfileData,
  ProfilePic,
  ProfileDescription,
} from "./profile.styled";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import TopicsList from "../../components/organisms/topicsList";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { profileTabMenu } from "./profile.constants";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";
import { useAuth, useRouting } from "../../helpers";
import { ROUTES } from "../../values/routes";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState(profileTabMenu[0].value);

  const { isLoggedIn } = useAuth();
  const { gotoRoute } = useRouting();

  useEffect(() => {
    if (!isLoggedIn) {
      gotoRoute(ROUTES.HOME);
    }
  }, [gotoRoute, isLoggedIn]);

  return (
    <ProfileContainer>
      <LeftSection>
        <ProfileData>
          <ProfilePic src={manImg} />
          <ProfileDescription>
            <Typography variant={TEXT_TYPE.H1}>Dharmit Dosani</Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </ProfileDescription>
        </ProfileData>
        <TabMenu
          value={currentTab}
          setValue={setCurrentTab}
          menuItems={profileTabMenu}
        />
        {profileTabMenu.map(({ value, component }) => (
          <TabPanel key={value} value={value} currentValue={currentTab}>
            {component}
          </TabPanel>
        ))}
      </LeftSection>
      <RightSection>
        <TopicsList title="Topics by Author" />
      </RightSection>
    </ProfileContainer>
  );
};

export default Profile;
