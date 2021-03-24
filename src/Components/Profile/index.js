import LogoutButton from "../LogoutButton";
import { Box, Heading } from "@chakra-ui/react";

function Profile({ user, isAuthenticated, isLoading }) {
  return (
    <Box>
      {isAuthenticated && (
        <div>
          <LogoutButton />
          <Heading>Welcome, {user.name}!</Heading>
          <img src={user.picture} alt={user.name} />
          <p>{user.email}</p>
        </div>
      )}
    </Box>
  );
}

/*ON THE PROFILE PAGE
Picture in the middle
Logout button
User information
  - name
  - group you're a member of 
  - next event
  - stats

  */

export default Profile;
