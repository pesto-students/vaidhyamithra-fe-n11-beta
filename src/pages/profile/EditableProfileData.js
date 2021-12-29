import PropTypes from "prop-types";
import manImg from "../../images/man_img.png";
import {
  ProfileDataContainer,
  ProfileDescription,
  ProfilePic,
} from "./profile.styled";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/atoms/input";
import Button from "../../components/atoms/button";
import { useState } from "react";
import { editProfileErrorMessages } from "./profile.constants";
import { updateUserInfo } from "../../redux/features/user/user.slice";
import { setAlert } from "../../redux/features/alerts/alerts.slice";
import { alertTypes } from "../../components/molecules/snackbar";

const EditableProfileData = ({ handleEditCompleted }) => {
  const { userInfo, isLoading } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo.userName);
  const [about, setAbout] = useState(userInfo.about);
  const [userNameError, setUserNameError] = useState("");
  const dispatch = useDispatch();

  const changeUserName = (newName) => {
    setUserName(newName);
    setUserNameError(newName ? "" : editProfileErrorMessages.userName.required);
  };

  const updateProfile = () => {
    dispatch(updateUserInfo({ userId: userInfo.id, name: userName, about }))
      .unwrap()
      .then(() => {
        dispatch(setAlert({ text: "Updated!", type: alertTypes.success }));
        handleEditCompleted();
      });
  };

  const isUpdateDisabled = !!userNameError;

  return (
    <ProfileDataContainer>
      <ProfilePic src={manImg} />
      <ProfileDescription>
        <InputField
          label="Name"
          value={userName}
          handleChange={(e) => changeUserName(e.target.value)}
          placeholder="Your Name"
          fullWidth
          helperText={userNameError}
          error={!!userNameError}
        />
        <InputField
          label="About"
          value={about}
          handleChange={(e) => setAbout(e.target.value)}
          placeholder="Write a short description about yourself"
          multiline
          fullWidth
        />
        <Button
          loading={isLoading}
          disabled={isUpdateDisabled}
          sx={{ ml: "auto" }}
          onClick={updateProfile}
        >
          Update
        </Button>
      </ProfileDescription>
    </ProfileDataContainer>
  );
};

EditableProfileData.propTypes = {
  handleEditCompleted: PropTypes.func,
};

EditableProfileData.defaultProps = {
  handleEdit: () => {},
};

export default EditableProfileData;
