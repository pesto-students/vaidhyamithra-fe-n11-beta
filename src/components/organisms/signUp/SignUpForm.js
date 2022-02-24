import React, { useEffect, useState } from "react";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import {
  NoteText,
  ModalActions,
  FormContainer,
  LeftStart,
} from "./signUp.styled";
import { useModalHelper } from "../../../helpers";
import validator from "validator";
import { signupErrorMessages } from "./signUp.constants";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../redux/features/user/user.slice";
import { setAlert } from "../../../redux/features/alerts/alerts.slice";
import { alertTypes } from "../../molecules/snackbar";

const initialFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isDoctor: false,
};

const SignUpForm = () => {
  const { isLoading, errorMessage, userInfo } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [signupFields, setSignupFields] = useState(initialFormFields);
  const [errorMsgs, setErrorMsgs] = useState(initialFormFields);
  const { openLogin, openInterests } = useModalHelper();

  const handleFieldChange = (field, value) => {
    const newVals = {
      ...signupFields,
      [field]: value,
    };
    setSignupFields(newVals);

    const newErrorMsgs = { ...initialFormFields };

    if (validator.isEmpty(newVals.name.trim())) {
      newErrorMsgs.name = signupErrorMessages.name.required;
    }

    if (!validator.isEmail(newVals.email.trim())) {
      newErrorMsgs.email = signupErrorMessages.email.invalid;
    }

    if (validator.isEmpty(newVals.email.trim())) {
      newErrorMsgs.email = signupErrorMessages.email.required;
    }

    if (validator.isEmpty(newVals.password.trim())) {
      newErrorMsgs.password = signupErrorMessages.password.required;
    }

    if (newVals.confirmPassword !== newVals.password) {
      newErrorMsgs.confirmPassword =
        signupErrorMessages.confirmPassword.mismatch;
    }

    if (validator.isEmpty(newVals.confirmPassword.trim())) {
      newErrorMsgs.confirmPassword =
        signupErrorMessages.confirmPassword.required;
    }

    setErrorMsgs(newErrorMsgs);
  };

  const handleSignup = () => {
    dispatch(
      signupUser({
        name: signupFields.name,
        email: signupFields.email,
        password: signupFields.password,
        isDoctor: signupFields.isDoctor,
      })
    );
  };

  useEffect(() => {
    if (errorMessage) {
      dispatch(setAlert({ text: errorMessage, type: alertTypes.error }));
    }
  }, [dispatch, errorMessage]);

  useEffect(() => {
    if (userInfo.accessToken) {
      dispatch(
        setAlert({ text: "Successfully Signed Up", type: alertTypes.success })
      );
      // add code to save auth info in localstorage
      openInterests();
    }
  }, [openInterests, dispatch, userInfo]);

  const isSignupDisabled = !!(
    errorMsgs.name ||
    errorMsgs.email ||
    errorMsgs.password ||
    errorMsgs.confirmPassword
  );

  return (
    <FormContainer>
      <InputField
        type={INPUT_TYPES.TEXT}
        value={signupFields.name}
        handleChange={(e) => handleFieldChange("name", e.target.value)}
        label="Name"
        error={!!errorMsgs.name}
        helperText={errorMsgs.name}
      />
      <InputField
        type={INPUT_TYPES.EMAIL}
        value={signupFields.email}
        handleChange={(e) => handleFieldChange("email", e.target.value)}
        label="Email"
        helperText={
          errorMsgs.email ? (
            errorMsgs.email
          ) : (
            <NoteText>
              <strong>Note:</strong> Verification link will be sent to this
              email ID
            </NoteText>
          )
        }
        error={!!errorMsgs.email}
      />
      <InputField
        type={INPUT_TYPES.PASSWORD}
        value={signupFields.password}
        handleChange={(e) => handleFieldChange("password", e.target.value)}
        label="Password"
        error={!!errorMsgs.password}
        helperText={errorMsgs.password}
      />
      <InputField
        type={INPUT_TYPES.PASSWORD}
        value={signupFields.confirmPassword}
        handleChange={(e) =>
          handleFieldChange("confirmPassword", e.target.value)
        }
        label="Confirm Password"
        error={!!errorMsgs.confirmPassword}
        helperText={errorMsgs.confirmPassword}
      />
      <Checkbox
        value={signupFields.isDoctor}
        handleChange={(e) => handleFieldChange("isDoctor", e.target.checked)}
        label="I want to post blogs on the platform"
      />

      <NoteText>
        <>
          <strong>Note:</strong> Only registered medical practitioners can post
          blogs on the platform after verification by our team
        </>
      </NoteText>

      <ModalActions>
        <LeftStart>
          Already have an account?
          <Button variant={BUTTON_VARIANTS.TEXT} onClick={openLogin}>
            Login
          </Button>
        </LeftStart>
        <Button
          sx={{ ml: "auto" }}
          disabled={isSignupDisabled}
          loading={isLoading}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </ModalActions>
    </FormContainer>
  );
};

export default SignUpForm;
