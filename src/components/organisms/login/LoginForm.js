import React from "react";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import {
  ModalActions,
  FormContainer,
  LeftStart,
} from "../signUp/signUp.styled";
import { useLoginUserMutation } from "../../../redux/features/user/user.service";

const TempStatus = ({ data, isLoading, isError }) => {
  return (
    <>
      {isError && <div>Oops! Error!</div>}
      {isLoading && <div>Loading...</div>}
    </>
  );
};

const LoginForm = () => {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();

  return (
    <FormContainer>
      <InputField type={INPUT_TYPES.EMAIL} label="Email" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <ModalActions>
        <LeftStart>
          Don't have an account?
          <Button variant={BUTTON_VARIANTS.TEXT}>Sign Up</Button>
        </LeftStart>
        <TempStatus isLoading={isLoading} isError={isError} />
        <Button onClick={loginUser}>Login</Button>
      </ModalActions>
    </FormContainer>
  );
};

export default LoginForm;
