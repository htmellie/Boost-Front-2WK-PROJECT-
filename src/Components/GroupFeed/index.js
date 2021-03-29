import { Heading } from "@chakra-ui/layout";
import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/index";
import { events } from "../../Data/sampleData";
import { getEventsByGroupId } from "../../Libs/httpRequests";

function GroupFeed() {
  const [exampleEvents, setExampleEvents] = useState(events);
  const [groupEvents, setGroupEvents] = useState([]);
  const [groupId, setGroupId] = useState(2);

  useEffect(() => {
    getEventsByGroupId(
      process.env.REACT_APP_BACKEND_URL,
      groupId,
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
