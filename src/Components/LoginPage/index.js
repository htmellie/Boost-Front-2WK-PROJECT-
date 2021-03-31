import { Heading, Box, Grid } from "@chakra-ui/react";
import React from "react";
import LoginButton from "../LoginButton";
import { ReactComponent as BoostLogo } from "./logo.svg";

export default function LoginPage() {
  return (
    <>
      <Grid placeItems="center" height={"90vh"}>
        <BoostLogo />
        <LoginButton></LoginButton>
      </Grid>
    </>
  );
}
