import PropTypes from "prop-types";
import {
  ProfileDataContainer,
  ProfileDescription,
  ProfilePic,
  ButtonActions,
  ProfilePicContainer,
} from "./profile.styled";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/atoms/input";
import Button, { BUTTON_VARIANTS } from "../../components/atoms/button";
import { useState } from "react";
import { editProfileErrorMessages } from "./profile.constants";
import { updateUserInfo } from "../../redux/features/user/user.slice";
import { setAlert } from "../../redux/features/alerts/alerts.slice";
import { alertTypes } from "../../components/molecules/snackbar";
import { uploadImage } from "../../redux/features/imageHandler/imageHandler.slice";
import defaultImage from "../../images/user.png";

const EditableProfileData = ({ handleEditCompleted }) => {
  const { userInfo, isLoading } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo.userName);
  const [about, setAbout] = useState(userInfo.about);
  const [userNameError, setUserNameError] = useState("");
  const [cloudinaryUrl, setCloudinaryUrl] = useState(userInfo.imgUrl);

  const dispatch = useDispatch();

  const changeUserName = (newName) => {
    setUserName(newName);
    setUserNameError(newName ? "" : editProfileErrorMessages.userName.required);
  };

  const updateProfile = () => {
    dispatch(
      updateUserInfo({
        userId: userInfo.id,
        name: userName,
        about,
        imgUrl: cloudinaryUrl,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(setAlert({ text: "Updated!", type: alertTypes.success }));
        handleEditCompleted();
      });
  };

  const uploadImg = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eeduaqeu");
    dispatch(uploadImage(formData))
    .then((res) => {
      setCloudinaryUrl(res.payload.secure_url);
    });
  };

  const isUpdateDisabled = !!userNameError;

  return (
    <ProfileDataContainer>
      <ProfilePicContainer>
        <ProfilePic src={cloudinaryUrl ? cloudinaryUrl : defaultImage} />
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={(e) => uploadImg(e.target.files[0])}
          />
          <Button color="secondary" variant="contained" component="span">
            Upload image
          </Button>
        </label>
      </ProfilePicContainer>
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
        <ButtonActions>
          <Button variant={BUTTON_VARIANTS.TEXT} onClick={handleEditCompleted}>
            Cancel
          </Button>
          <Button
            loading={isLoading}
            disabled={isUpdateDisabled}
            onClick={updateProfile}
          >
            Update
          </Button>
        </ButtonActions>
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
