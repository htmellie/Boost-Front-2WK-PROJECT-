import { useState } from "react";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function EventCard({ event }) {
  console.log(event.name);

  //   const date = new Date(event.event.time); //-> convert to string
  //   const time = event.event.time.slice(11, 16);

  return (
    <Box>
      <Heading>{event.name}</Heading>
      {/* <Text>{date}</Text>
      <Text>{time}</Text> */}
    </Box>
  );
}

export default EventCard;
