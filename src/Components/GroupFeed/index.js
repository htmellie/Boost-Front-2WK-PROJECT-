import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@material-ui/core';
import EventCard from '../EventCard/index';
import { getEventsByGroupId } from '../../Libs/httpRequests';
import { useUserContext } from 'Libs/userContext';

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
  }, []);

 
  useEffect(() => {
    setEventsWillNotAttend(
      groupEvents.filter((event) => !dbUser?.eventsIds.includes(event.id))
    );
  }, [groupEvents, eventsWillAttend]);

  return (
    <Box>
      <Heading>Group Feed</Heading>
      {eventsWillAttend.map((event) => (
        <EventCard
          {...event}
          key={event.id}
          willAttend={true}
        />
      ))}
      {eventsWillNotAttend.map((event) => (
        <EventCard
          {...event}
          key={event.id}
          willAttend={false}
        />
      ))}
    </Box>
  );
}

export default GroupFeed;
