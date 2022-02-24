import { useEffect, useState } from "react";
import {
  LogoutContainer,
  ProfileContainer,
  UpdateInterestsBtn,
} from "./profile.styled";
import {
  LeftSection,
  RightSection,
} from "../../components/organisms/appSkeleton";
import TopicsList from "../../components/organisms/topicsList";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import ProfileData from "./ProfileData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProfileDetails,
  getTagsByAuthor,
  resetProfile,
} from "../../redux/features/profile/profile.slice";
import SavedBlogs from "./SavedBlogs";
import PublishedBlogs from "./PublishedBlogs";
import DraftBlogs from "./DraftBlogs";
import Button from "../../components/atoms/button";
import { useModalHelper, useRouting } from "../../helpers";
import EditableProfileData from "./EditableProfileData";
import { logoutUser } from "../../redux/features/user/user.slice";
import { ROUTES } from "../../values/routes";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isEditMode, setIsEditMode] = useState(false);
  const {
    id: selfUserId,
    isDoctor,
    interests,
  } = useSelector((state) => state.user.userInfo);
  const { tags, userName } = useSelector((state) => state.profile.userInfo);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { openInterests } = useModalHelper();
  const { gotoRoute } = useRouting();

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
          component: <PublishedBlogs userId={userId} />,
        },
        {
          value: 3,
          label: "Drafts",
          component: <DraftBlogs userId={userId} />,
        }
      );
    }
  } else {
    profileMenu.push({
      value: 1,
      label: `${userName}'s blogs`,
      component: <PublishedBlogs userId={userId} />,
    });
  }

  const handleLogout = () => {
    dispatch(logoutUser());
    gotoRoute(ROUTES.HOME);
  };

  // init + cleanup
  useEffect(() => {
    dispatch(getProfileDetails({ userId }));
    dispatch(getTagsByAuthor({ authorId: userId }));

    return () => {
      dispatch(resetProfile());
    };
  }, [dispatch, userId]);

  const toShowTopicsList = isSelfProfile ? isDoctor : true;

  return (
    <ProfileContainer>
      <LeftSection>
        {isEditMode ? (
          <EditableProfileData
            handleEditCompleted={() => setIsEditMode(false)}
          />
        ) : (
          <ProfileData
            isSelfProfile={isSelfProfile}
            handleEdit={() => setIsEditMode(true)}
          />
        )}
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
        {toShowTopicsList && (
          <TopicsList
            tags={tags}
            title={
              isSelfProfile
                ? `Topics you've written blogs for`
                : `Topics by ${userName}`
            }
          />
        )}
        {isSelfProfile && (
          <>
            <TopicsList
              tags={interests}
              title={`Topics you're interested in`}
            />
            <UpdateInterestsBtn onClick={openInterests}>
              Update interests
            </UpdateInterestsBtn>
          </>
        )}
        {isSelfProfile && (
          <LogoutContainer>
            <Button onClick={handleLogout}>Logout</Button>
          </LogoutContainer>
        )}
      </RightSection>
    </ProfileContainer>
  );
};

export default Profile;
