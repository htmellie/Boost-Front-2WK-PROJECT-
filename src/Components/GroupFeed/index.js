import React, { useEffect, useState } from "react";
import { Heading, Grid } from "@chakra-ui/react";
import EventCard from "../EventCard/index";
import { getEventsByGroupId } from "../../Libs/httpRequests";
import { useUserContext } from "Libs/userContext";

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
        .filter((event) => new Date(event.time) > new Date(Date.now()))
        .filter((event) => !dbUser?.eventsIds.includes(event.id))
    );
    // eslint-disable-next-line
  }, [groupEvents, eventsWillAttend]);

  return (
    <Grid
      placeItems="center"
      height={["90vh", "90vh", "90vh", "100vh"]}
      margin="10%"
    >
      <Heading>Group Feed</Heading>
      {eventsWillAttend.map((event) => (
        <EventCard {...event} key={event.id} willAttend={true} />
      ))}
      {eventsWillNotAttend.map((event) => (
        <EventCard {...event} key={event.id} willAttend={false} />
      ))}
    </Grid>
  );
}

export default GroupFeed;
