import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Grid placeItems="center" width="75%" height="75%" margin="auto" mt="30%">
      <Button
        bg="#1AC0C6"
        size="lg"
        textColor="#fff"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </Grid>
  );
};

export default LoginButton;
