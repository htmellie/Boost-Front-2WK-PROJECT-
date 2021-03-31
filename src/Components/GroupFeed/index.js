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

  console.log({ eventsWillNotAttend });
  // console.log({ eventsWillAttend });
  // console.log({ groupEvents });

  // console.log(dbUser);
  useEffect(() => {
    getEventsByGroupId(
      process.env.REACT_APP_BACKEND_URL,
      dbUser?.partOfGroupId,
      setGroupEvents
    );
  }, []);

  //logic not working
  useEffect(() => {
    // groupEvents.forEach((item) => {
    //   const ItemIndex = eventsWillAttend.findIndex(
    //     (eventsWillAttend) => eventsWillAttend.name === item.name
    //   );

    //   // eventsWillNotAttend.splice(ItemIndex, 1)
    //   setEventsWillNotAttend([
    //     ...groupEvents.slice(0, ItemIndex),
    //     ...groupEvents.slice(ItemIndex + 1),
    //   ]);
    // });
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
          // setGroupEvents={setGroupEvents}
          // groupEvents={groupEvents}
        />
      ))}
      {eventsWillNotAttend.map((event) => (
        <EventCard
          {...event}
          key={event.id}
          willAttend={false}
          // setGroupEvents={setGroupEvents}
          // groupEvents={groupEvents}
        />
      ))}
    </Box>
  );
}

export default GroupFeed;
