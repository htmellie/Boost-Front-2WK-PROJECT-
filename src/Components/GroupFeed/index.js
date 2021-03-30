import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@material-ui/core';
import EventCard from '../EventCard/index';
import { getEventsByGroupId } from '../../Libs/httpRequests';
import { useUserContext } from 'Libs/userContext';

function GroupFeed() {
  const [groupEvents, setGroupEvents] = useState([]);
  const { dbUser } = useUserContext();

  useEffect(() => {
    getEventsByGroupId(
      process.env.REACT_APP_BACKEND_URL,
      dbUser?.partOfGroupId,
      setGroupEvents
    );
  }, []);

  return (
    <Box>
      <Heading>Group Feed</Heading>

      {groupEvents.map((event) => (
        <EventCard event={event} />
      ))}
    </Box>
  );
}

export default GroupFeed;
