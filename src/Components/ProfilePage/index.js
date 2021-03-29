import React from "react";

import { Grid, HStack } from "@chakra-ui/react";
import GenericButton from "../GenericButton";
import ProfileInfo from "Components/ProfileInfo";
import NewUserForm from "../NewUserForm";
import ProfileCard from "Components/ProfileCard";
import { useUserContext } from "../../Libs/userContext";
import LoginButton from "Components/LoginButton";
import LogoutButton from "Components/LogoutButton";

function ProfilePage() {
  const { userToDisplay } = useUserContext();

  return (
    <>
      {/* <ProfileInfo /> */}
      {userToDisplay.id ? <ProfileCard {...userToDisplay} /> : <NewUserForm />}
      <LogoutButton/>
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
