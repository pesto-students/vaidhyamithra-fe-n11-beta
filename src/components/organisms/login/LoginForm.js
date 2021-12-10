/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import {
  ModalActions,
  FormContainer,
  LeftStart,
} from "../signUp/signUp.styled";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/user/user.slice";

const TempStatus = ({ isLoading, errorMessage }) => {
  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      {isLoading && <div>Loading...</div>}
    </>
  );
};

const LoginForm = () => {
  const { isLoading, errorMessage, userInfo } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      loginUser({
        name: "Manirathnam",
        password: "Manirathnam123_",
      })
    );
  };

  return (
    <FormContainer>
      <InputField type={INPUT_TYPES.EMAIL} label="Email" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <ModalActions>
        <LeftStart>
          Don't have an account?
          <Button variant={BUTTON_VARIANTS.TEXT}>Sign Up</Button>
        </LeftStart>
        <TempStatus isLoading={isLoading} errorMessage={errorMessage} />
        <Button onClick={handleLogin}>Login</Button>
      </ModalActions>
    </FormContainer>
  );
};

export default LoginForm;
