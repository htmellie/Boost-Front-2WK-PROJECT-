import React, { useEffect, useState } from "react";

import LogoutButton from "../LogoutButton";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GenericButton from "../GenericButton";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByUsername, getGroupById } from "../../Libs/httpRequests";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [databaseUser, setDatabaseUser] = useState(null);
  const [partOfGroup, setPartOfGroup] = useState(null);

  useEffect(() => {
    getUserByUsername(
      process.env.REACT_APP_BACKEND_URL,
      "lucaxue",
      setDatabaseUser
    );
  }, [isAuthenticated]);

  useEffect(() => {
    getGroupById(
      process.env.REACT_APP_BACKEND_URL,
      databaseUser.partOfGroupId,
      setPartOfGroup
    );
  }, [databaseUser]);

  if (isLoading || !databaseUser || !partOfGroup) {
    return <div>Loading</div>;
  }
  return (
    isAuthenticated && (
      <Box>
        <LogoutButton />
        <Grid
          placeItems="center"
          border="4px"
          borderColor="#FACD60"
          width="75%"
          height="75%"
          margin="auto"
          mt="5"
          borderRadius="md"
        >
          <GridItem>Welcome, {databaseUser.username}!</GridItem>
          <GridItem>
            <img src={user.picture} alt={user.name} />
          </GridItem>
          <GridItem>{user.email}</GridItem>
          <GridItem>Group {partOfGroup}</GridItem>
          <GridItem>Next Session:</GridItem>
          <GridItem>Total exercise hours: {databaseUser.hours}</GridItem>
        </Grid>
        <Grid placeItems="center" width="75%" height="75%" margin="auto" mt="5">
          <HStack spacing="2px">
            <GenericButton
              text="Create a group"
              handleClick={() => console.log("click")}
            ></GenericButton>

            <GenericButton
              text="Join a group"
              handleClick={() => console.log("click")}
            ></GenericButton>
          </HStack>
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
