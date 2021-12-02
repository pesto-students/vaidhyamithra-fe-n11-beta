import React from "react";
import InputField, { INPUT_TYPES } from "../../components/atoms/input";
import Button, { BUTTON_VARIANTS } from "../../components/atoms/button";
import { FormGroup, FormControlLabel, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { NoteSpanText, NoteText, CustomDiv, BottomDiv, FormContainer } from "./signup.styled";

export default function SigunpForm() {
  return (
    <FormContainer>
      <InputField type={INPUT_TYPES.TEXT} label="Name" />
      <InputField
        type={INPUT_TYPES.EMAIL}
        label="Email"
        helperText={
          <>
            <NoteText>Note:</NoteText>
            <NoteSpanText>
              Verification link will be sent to this email ID
            </NoteSpanText>
          </>
        }
      />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Confirm Password" />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="I want to post blogs on the platform"
        />
        <CustomDiv>
          <b>Note:</b>
          <NoteSpanText>
            Only registered medical practitioners can post blogs on the platform
            after verification by our team
          </NoteSpanText>
        </CustomDiv>
      </FormGroup>

      <BottomDiv>
        Already have an account ?{" "}
        <Button variant={BUTTON_VARIANTS.TEXT}>Login</Button>
        <Button>Sign Up</Button>
      </BottomDiv>
    </FormContainer>
  );
}
