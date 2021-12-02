import { Typography } from "@mui/material";
import React from "react";
import Button from "../../components/atoms/button";
import InputField from "../../components/atoms/input";
import { FormContainer } from "./signup.styled";

export default function SignUp() {
  return (
    <FormContainer>
      <Typography variant="h2">Sign up</Typography>
      <InputField type="text" label="Name" variant="outlined" />
      <InputField type="email" label="Email" variant="outlined" />
      <InputField type="password" label="Password" variant="outlined" />
      <InputField type="password" label="Confirm Password" variant="outlined" />
      <Button>Sign Up</Button>
    </FormContainer>
  );
}
