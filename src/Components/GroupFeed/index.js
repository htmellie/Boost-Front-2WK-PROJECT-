import React, { useEffect, useState } from "react";
import { Heading, Grid, GridItem, Center } from "@chakra-ui/react";
import EventCard from "../EventCard/index";
import { getEventsByGroupId } from "../../Libs/httpRequests";
import { useUserContext } from "Libs/userContext";
import { DateTime } from "luxon";

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
    <Center mt="15px" bg="white">
      <Grid placeItems="center" minH="60vh" mb="100px">
        <Heading>Group Feed</Heading>

        <GridItem py={5}>
          <Heading pl={2} size="md" color="black">
            Attending Events
          </Heading>
          {eventsWillAttend.map((event) => (
            <EventCard {...event} key={event.id} willAttend={true} />
          ))}
        </GridItem>
        <GridItem py={5}>
          <Heading pl={2} size="md" color="black">
            Other Events
          </Heading>
          {eventsWillNotAttend.map((event) => (
            <EventCard {...event} key={event.id} willAttend={false} />
          ))}
        </GridItem>
      </Grid>
    </Center>
  );
}

export default GroupFeed;
