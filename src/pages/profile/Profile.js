import { useEffect, useState } from "react";
import { ProfileContainer } from "./profile.styled";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import TopicsList from "../../components/organisms/topicsList";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import ProfileData from "./ProfileData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTagsByAuthor } from "../../redux/features/profile/profile.slice";
import { CardList } from "../../components/organisms/blogCard";
import SavedBlogs from "./SavedBlogs";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const { id: selfUserId, isDoctor } = useSelector(
    (state) => state.user.userInfo
  );
  const { tags, userName } = useSelector((state) => state.profile.userInfo);
  const dispatch = useDispatch();
  const { userId } = useParams();

  const isSelfProfile = selfUserId === userId;

  const profileMenu = [];
  if (isSelfProfile) {
    profileMenu.push({
      value: 1,
      label: "Your Bookmarks",
      component: <SavedBlogs userId={userId} />,
    });

    if (isDoctor) {
      profileMenu.push(
        {
          value: 2,
          label: "Published",
          component: <CardList />,
        },
        {
          value: 3,
          label: "Drafts",
          component: <CardList />,
        }
      );
    }
  } else {
    profileMenu.push({
      value: 1,
      label: `${userName}'s blogs`,
      component: <CardList />,
    });
  }

  console.log("isSelfProfile: ", isSelfProfile);

  useEffect(() => {
    dispatch(getTagsByAuthor({ authorId: userId }));
  }, [dispatch, userId]);

  return (
    <ProfileContainer>
      <LeftSection>
        <ProfileData />
        <TabMenu
          value={currentTab}
          setValue={setCurrentTab}
          menuItems={profileMenu}
        />
        {profileMenu.map(({ value, component }) => (
          <TabPanel key={value} value={value} currentValue={currentTab}>
            {component}
          </TabPanel>
        ))}
      </LeftSection>
      <RightSection>
        <TopicsList tags={tags} title={`Topics by ${userName}`} />
      </RightSection>
    </ProfileContainer>
  );
};

export default Profile;
