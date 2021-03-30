import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@material-ui/core";
import EventCard from "../EventCard/index";
import { getEventsByGroupId } from "../../Libs/httpRequests";
import { useUserContext } from "Libs/userContext";

function GroupFeed() {
  const [groupEvents, setGroupEvents] = useState([]);
  const { dbUser, eventsWillAttend } = useUserContext();
  console.log(dbUser);
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
      {eventsWillAttend.map((event) => (
        <EventCard
          {...event}
          key={event.id}
          willAttend={true}
          setGroupEvents={setGroupEvents}
          groupEvents={groupEvents}
        />
      ))}
      {groupEvents.map((event) => (
        <EventCard
          {...event}
          key={event.id}
          willAttend={false}
          setGroupEvents={setGroupEvents}
          groupEvents={groupEvents}
        />
      ))}
    </Box>
  );
}

export default GroupFeed;
