import React from "react";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import {
  ModalActions,
  FormContainer,
  LeftStart,
} from "../signUp/signUp.styled";

const LoginForm = () => {
  return (
    <FormContainer>
      <InputField type={INPUT_TYPES.EMAIL} label="Email" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <ModalActions>
        <LeftStart>
          Don't have an account?
          <Button variant={BUTTON_VARIANTS.TEXT}>Sign Up</Button>
        </LeftStart>
        <Button>Login</Button>
      </ModalActions>
    </FormContainer>
  );
};

export default LoginForm;
