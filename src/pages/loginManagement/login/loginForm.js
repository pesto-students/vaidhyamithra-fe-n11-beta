import React from "react";
import InputField, { INPUT_TYPES } from "../../../components/atoms/input";
import Button, { BUTTON_VARIANTS } from "../../../components/atoms/button";
import { BottomDiv, FormContainer, LeftStart } from "../signup.styled";

export default function LoginForm() {
  return (
    <FormContainer>
      <InputField type={INPUT_TYPES.EMAIL} label="Email" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <BottomDiv>
        <LeftStart>
          Don't have an account?
          <Button variant={BUTTON_VARIANTS.TEXT}>Sign Up</Button>
        </LeftStart>
        <Button>Login</Button>
      </BottomDiv>
    </FormContainer>
  );
}
