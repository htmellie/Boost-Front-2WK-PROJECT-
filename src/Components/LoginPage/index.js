import { Grid } from '@chakra-ui/react';
import React from 'react';
import LoginButton from '../LoginButton';

export default function LoginPage() {
  return (
    <Grid placeItems="center" height="100vh">
      <LoginButton></LoginButton>
    </Grid>
  );
}
