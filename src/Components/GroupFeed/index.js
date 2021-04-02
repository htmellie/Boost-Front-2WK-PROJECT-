import React, { useEffect, useState } from 'react';
import { Heading, Grid, GridItem } from '@chakra-ui/react';
import EventCard from '../EventCard/index';
import { getEventsByGroupId } from '../../Libs/httpRequests';
import { useUserContext } from 'Libs/userContext';
import { DateTime } from 'luxon';

function GroupFeed() {
  const [groupEvents, setGroupEvents] = useState([]);
  const [eventsWillNotAttend, setEventsWillNotAttend] = useState([]);
  const { dbUser, eventsWillAttend } = useUserContext();

  useEffect(() => {
    getEventsByGroupId(
      process.env.REACT_APP_BACKEND_URL,
      dbUser?.partOfGroupId,
      setGroupEvents
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setEventsWillNotAttend(
      groupEvents
        .filter((event) => DateTime.fromISO(event.time) > DateTime.now())
        .filter((event) => !dbUser?.eventsIds.includes(event.id))
    );
    // eslint-disable-next-line
  }, [groupEvents, eventsWillAttend]);

  return (
    <Grid placeItems="center" minH="60vh" mb="100px">
      <Heading>Group Feed</Heading>
      <GridItem width={['100%', '80%', '70%', '60%']}>
        {eventsWillAttend.map((event) => (
          <EventCard {...event} key={event.id} willAttend={true} />
        ))}
        {eventsWillNotAttend.map((event) => (
          <EventCard {...event} key={event.id} willAttend={false} />
        ))}
      </GridItem>
    </Grid>
  );
}

export default GroupFeed;
