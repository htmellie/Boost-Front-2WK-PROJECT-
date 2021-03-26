import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import LogoutButton from 'Components/LogoutButton';
import {
  getUserByUsername,
  getGroupById,
  getEventById,
  getManyEventsByIds,
} from 'Libs/httpRequests';
import React, { useEffect, useState } from 'react';

function ProfileInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [databaseUser, setDatabaseUser] = useState(null);
  const [partOfGroup, setPartOfGroup] = useState(null);
  const [eventsWillAttend, setEventsWillAttend] = useState([]);
  const [nextEvent, setNextEvent] = useState(null);

  //console.log(user);

  useEffect(() => {
    getUserByUsername(
      process.env.REACT_APP_BACKEND_URL,
      'lucaxue',
      setDatabaseUser
    );
  }, [isAuthenticated]);

  //check if db user is an object, if not, do a post request

  useEffect(() => {
    getGroupById(
      process.env.REACT_APP_BACKEND_URL,
      databaseUser?.partOfGroupId,
      setPartOfGroup
    );

    getManyEventsByIds(
      process.env.REACT_APP_BACKEND_URL,
      [2, 1],
      setEventsWillAttend
    );
  }, [databaseUser]);

  // useEffect(() => {
  //   const futureEvents = eventsWillAttend.filter(
  //     (event) => new Date(event.time) > new Date(Date.now())
  //   );
  //   console.log(futureEvents);
  //   // setNextEvent(
  //   //   futureEvents.reduce((acc, cur) =>
  //   //     new Date(cur.time) < new Date(acc.time) ? cur : acc
  //   //   )
  //   // );
  // }, [eventsWillAttend]);

  if (
    isLoading ||
    !databaseUser ||
    !partOfGroup ||
    eventsWillAttend.length === 0
  ) {
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
          <GridItem>Group: {partOfGroup}</GridItem>
          <GridItem>Next Session:{eventsWillAttend[0].name} </GridItem>
          <GridItem>Total exercise hours: {databaseUser.hours}</GridItem>
        </Grid>
      </Box>
    )
  );
}

export default ProfileInfo;
