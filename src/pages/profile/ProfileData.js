import PropTypes from "prop-types";
import {
  EditIconContainer,
  NameContainer,
  ProfileDataContainer,
  ProfileDescription,
  ProfilePic,
} from "./profile.styled";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";
import { useSelector } from "react-redux";
import Ficon from "../../components/atoms/featherIcon";
import { USER_SLICE } from "../../redux/features/user/user.config";
import { PROFILE_SLICE } from "../../redux/features/profile/profile.config";
import defaultImg from "../../images/user.png";

const ProfileData = ({ isSelfProfile, handleEdit }) => {
  const { userName, about, imgUrl } = useSelector(
    (state) => state[isSelfProfile ? USER_SLICE : PROFILE_SLICE].userInfo
  );

  return (
    <ProfileDataContainer>
      <ProfilePic src={imgUrl ? imgUrl : defaultImg} />
      <ProfileDescription>
        <NameContainer>
          <Typography variant={TEXT_TYPE.H1}>{userName}</Typography>
          {isSelfProfile && (
            <EditIconContainer onClick={handleEdit}>
              <Ficon icon="edit-2" />
            </EditIconContainer>
          )}
        </NameContainer>
        <Typography>{about}</Typography>
      </ProfileDescription>
    </ProfileDataContainer>
  );
};

ProfileData.propTypes = {
  isSelfProfile: PropTypes.bool,
  handleEdit: PropTypes.func,
};

ProfileData.defaultProps = {
  isSelfProfile: false,
  handleEdit: () => {},
};

export default ProfileData;
