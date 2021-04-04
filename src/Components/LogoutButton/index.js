import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

function LogoutButton({ ...props }) {
  const { logout } = useAuth0();
  return (
    <Button
      bg="#1AC0C6"
      size="md"
      textColor="#fff"
      onClick={() => logout({ returnTo: window.location.origin })}
      {...props}
    >
      Log Out
    </Button>
  );
}

export default LogoutButton;
