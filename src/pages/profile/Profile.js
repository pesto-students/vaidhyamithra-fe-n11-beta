import { useEffect, useState } from "react";
import { ProfileContainer } from "./profile.styled";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import TopicsList from "../../components/organisms/topicsList";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { profileTabMenu } from "./profile.constants";
import ProfileData from "./ProfileData";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTagsByAuthor } from "../../redux/features/profile/profile.slice";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState(profileTabMenu[0].value);
  const { id: selfUserId } = useSelector((state) => state.user.userInfo);
  const { tags, userName } = useSelector((state) => state.profile.userInfo);
  const { userId } = useParams();
  const dispatch = useDispatch();

  const isSelfProfile = selfUserId === userId;
  console.log("isSelfProfile: ", isSelfProfile);

  useEffect(() => {
    dispatch(getTagsByAuthor({ authorId: userId }));
  }, [dispatch, userId]);

  return (
    <ProfileContainer>
      <LeftSection>
        <ProfileData />
        {isSelfProfile ? (
          <>
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
          </>
        ) : (
          <Typography variant={TEXT_TYPE.H2}>{userName}'s blogs</Typography>
        )}
      </LeftSection>
      <RightSection>
        <TopicsList tags={tags} title={`Topics by ${userName}`} />
      </RightSection>
    </ProfileContainer>
  );
};

export default Profile;
