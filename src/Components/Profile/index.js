import LogoutButton from "../LogoutButton";
import { Box, Heading, Grid, GridItem, Center } from "@chakra-ui/react";

function Profile({ user, isAuthenticated, isLoading }) {
  return (
    <Box>
      {isAuthenticated && <LogoutButton />}
      <Grid
        bg="#FACD60"
        width="75%"
        height="75%"
        margin="auto"
        mt="5"
        alignContent="center"
      >
        {isAuthenticated && (
          <div>
            <GridItem>Welcome, {user.name}!</GridItem>
            <GridItem>
              <img src={user.picture} alt={user.name} />
            </GridItem>
            <GridItem>{user.email}</GridItem>
          </div>
        )}
      </Grid>
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
