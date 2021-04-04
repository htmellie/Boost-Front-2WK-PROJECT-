import React from 'react';
import { Center, Grid } from '@chakra-ui/react';
import { useUserContext } from '../../Libs/userContext';
import NewUserForm from '../NewUserForm';
import EventCard from '../EventCard';
import ProfileCard from '../ProfileCard';
import EventCardWrapper from 'Components/EventCard/wrapper';

function ProfilePage() {
  const { userToDisplay, nextEvent } = useUserContext();

  return (
    <Center bg="yellow.100">
      <Grid placeItems="center" minH="90vh" mb="100px">
        {userToDisplay.id && userToDisplay.group ? (
          <ProfileCard {...userToDisplay} />
        ) : (
          <NewUserForm />
        )}

        {nextEvent && <EventCard {...nextEvent} willAttend={true} />}
      </Grid>
    </Center>
  );
}

export default ProfilePage;
