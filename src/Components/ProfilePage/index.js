import React from 'react';
import { Grid } from '@chakra-ui/react';
import { useUserContext } from '../../Libs/userContext';
import NewUserForm from '../NewUserForm';
import EventCard from '../EventCard';
import ProfileCard from '../ProfileCard';

function ProfilePage() {
  const { userToDisplay, nextEvent } = useUserContext();

  return (
    <Grid placeItems="center" minH="90vh" mb="100px">
      {userToDisplay.id && userToDisplay.group ? (
        <ProfileCard {...userToDisplay} />
      ) : (
        <NewUserForm />
      )}

      {nextEvent && <EventCard {...nextEvent} willAttend={true} />}
    </Grid>
  );
}

export default ProfilePage;
