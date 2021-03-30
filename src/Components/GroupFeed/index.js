import React, { useEffect, useState } from "react";
import { Heading, Grid } from "@chakra-ui/layout";
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
    <Grid placeItems="center" height={["90vh", "90vh", "90vh", "100vh"]}>
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
    </Grid>
  );
}

export default GroupFeed;
