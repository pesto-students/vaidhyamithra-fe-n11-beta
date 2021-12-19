import { useEffect, useState } from "react";
import validator from "validator";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import {
  ModalActions,
  FormContainer,
  LeftStart,
} from "../signUp/signUp.styled";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/user/user.slice";
import { loginErrorMessages } from "./login.constants";
import { setAlert } from "../../../redux/features/alerts/alerts.slice";
import { alertTypes } from "../../molecules/snackbar";
import { hideModal } from "../../../redux/features/modals/modals.slice";

const initialFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { isLoading, errorMessage, userInfo } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [loginFields, setLoginFields] = useState(initialFormFields);
  const [errorMsgs, setErrorMsgs] = useState(initialFormFields);

  const handleFieldChange = (field, value) => {
    const newVals = {
      ...loginFields,
      [field]: value,
    };
    setLoginFields(newVals);

    const newErrorMsgs = { ...initialFormFields };

    if (!validator.isEmail(newVals.email.trim())) {
      newErrorMsgs.email = loginErrorMessages.email.invalid;
    }

    if (validator.isEmpty(newVals.email.trim())) {
      newErrorMsgs.email = loginErrorMessages.email.required;
    }

    if (validator.isEmpty(newVals.password.trim())) {
      newErrorMsgs.password = loginErrorMessages.password.required;
    }

    setErrorMsgs(newErrorMsgs);
  };

  const handleLogin = () => {
    dispatch(
      loginUser({
        email: loginFields.email,
        password: loginFields.password,
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
        setAlert({ text: "Successfully logged in", type: alertTypes.success })
      );
      // add code to save auth info in localstorage
      dispatch(hideModal());
    }
  }, [dispatch, userInfo]);

  const isLoginDisabled = !!(errorMsgs.email || errorMsgs.password);

  return (
    <FormContainer>
      <InputField
        value={loginFields.email}
        type={INPUT_TYPES.EMAIL}
        label="Email"
        handleChange={(e) => handleFieldChange("email", e.target.value)}
        helperText={errorMsgs.email}
        error={!!errorMsgs.email}
      />
      <InputField
        value={loginFields.password}
        type={INPUT_TYPES.PASSWORD}
        label="Password"
        handleChange={(e) => handleFieldChange("password", e.target.value)}
        helperText={errorMsgs.password}
        error={!!errorMsgs.password}
      />
      <ModalActions>
        <LeftStart>
          Don't have an account?
          <Button variant={BUTTON_VARIANTS.TEXT}>Sign Up</Button>
        </LeftStart>
        <Button
          disabled={isLoginDisabled}
          loading={isLoading}
          onClick={handleLogin}
        >
          Login
        </Button>
      </ModalActions>
    </FormContainer>
  );
};

export default LoginForm;
