import React from "react";

import { Grid, HStack } from "@chakra-ui/react";
import GenericButton from "../GenericButton";
import ProfileInfo from "Components/ProfileInfo";
import NewUserForm from "../NewUserForm";

function ProfilePage() {
  return (
    <>
      <ProfileInfo />
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
      <NewUserForm />
    </>
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

export default ProfilePage;
