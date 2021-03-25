import LogoutButton from "../LogoutButton";
import { Box, Heading, Grid, GridItem, Center } from "@chakra-ui/react";
import GenericButton from "../GenericButton";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <Box>
        <LogoutButton />
        <Grid
          placeItems="center"
          bg="#FACD60"
          width="75%"
          height="75%"
          margin="auto"
          mt="5"
        >
          <GridItem>Welcome, {user.name}!</GridItem>
          <GridItem>
            <img src={user.picture} alt={user.name} />
          </GridItem>
          <GridItem>{user.email}</GridItem>
          <GridItem>Group</GridItem>
          <GridItem>Next Session:</GridItem>
          <GenericButton
            text="Create a group"
            handleClick={() => console.log("click")}
          ></GenericButton>
          <GenericButton
            text="Join a group"
            handleClick={() => console.log("click")}
          ></GenericButton>
        </Grid>
      </Box>
    )
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
