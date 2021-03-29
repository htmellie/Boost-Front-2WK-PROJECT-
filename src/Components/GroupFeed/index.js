import { Heading } from "@chakra-ui/layout";
import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/index";
import { events } from "../../Data/sampleData";

function GroupFeed() {
  const [exampleEvents, setExampleEvents] = useState(events);

  return (
    <Box>
      <Heading>Group Feed</Heading>

      {exampleEvents.map((event) => (
        <EventCard event={event} />
      ))}
    </Box>
  );
}

export default GroupFeed;
