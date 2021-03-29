import { useState } from "react";
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
function EventCard(event) {
  console.log(event.event.name);
  const date = event.event.time.slice(0, 10);
  const time = event.event.time.slice(11, 16);
  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {event.event.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <WrapItem>Date: {date}</WrapItem>
            <WrapItem>Time: {time}</WrapItem>
            <WrapItem>Location: {event.event.location}</WrapItem>
            <WrapItem>Description: {event.event.description}</WrapItem>
            <WrapItem>Exercise Type: {event.event.exerciseType}</WrapItem>
            <WrapItem>Intensity: {event.event.intensity}</WrapItem>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default EventCard;
