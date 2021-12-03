import React from "react";
import InputField, { INPUT_TYPES } from "../../atoms/input";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import { NoteText, BottomDiv, FormContainer, LeftStart } from "./signUp.styled";

const SignUpForm = () => {
  return (
    <FormContainer>
      <InputField type={INPUT_TYPES.TEXT} label="Name" />
      <InputField
        type={INPUT_TYPES.EMAIL}
        label="Email"
        helperText={
          <NoteText>
            <strong>Note:</strong>
            Verification link will be sent to this email ID
          </NoteText>
        }
      />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Confirm Password" />
      <Checkbox label="I want to post blogs on the platform" />

      <NoteText>
        <strong>Note:</strong>
        Only registered medical practitioners can post blogs on the platform
        after verification by our team
      </NoteText>

      <BottomDiv>
        <LeftStart>
          Already have an account?
          <Button variant={BUTTON_VARIANTS.TEXT}>Login</Button>
        </LeftStart>
        <Button sx={{ ml: "auto" }}>Sign Up</Button>
      </BottomDiv>
    </FormContainer>
  );
};

export default SignUpForm;