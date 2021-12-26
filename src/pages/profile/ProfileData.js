import manImg from "../../images/man_img.png";
import {
  ProfileDataContainer,
  ProfileDescription,
  ProfilePic,
} from "./profile.styled";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";
import { useSelector } from "react-redux";

const ProfileData = () => {
  const { userName, about } = useSelector((state) => state.profile.userInfo);

  return (
    <ProfileDataContainer>
      <ProfilePic src={manImg} />
      <ProfileDescription>
        <Typography variant={TEXT_TYPE.H1}>{userName}</Typography>
        <Typography>{about}</Typography>
      </ProfileDescription>
    </ProfileDataContainer>
  );
};

export default ProfileData;
