import { Typography } from "@mui/material";
import React from "react";
import Button from "../../components/atoms/button";
import InputField, { INPUT_TYPES } from "../../components/atoms/input";
import { FormContainer } from "./signup.styled";

export default function SignUp() {
  return (
    <FormContainer>
      <Typography variant="h2">Sign up</Typography>
      <InputField type={INPUT_TYPES.TEXT} label="Name" />
      <InputField type={INPUT_TYPES.EMAIL} label="Email" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Password" />
      <InputField type={INPUT_TYPES.PASSWORD} label="Confirm Password" />
      <Button>Sign Up</Button>
    </FormContainer>
  );
}
