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
import getAddress from '../Geecode/index';

function EventCard({event}) {
  console.log(event.name);
  
  
  const date=  new Date(event.time).toString().slice(0,15);
  const time = new Date(event.time).toString().slice(16,21);

  console.log(event);


    getAddress();




  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {event.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <WrapItem>Date: {date}</WrapItem>
            <WrapItem>Time: {time}</WrapItem>
            <WrapItem>Location: {event.location}</WrapItem>
            <WrapItem>Description: {event.description}</WrapItem>
            <WrapItem>Exercise Type: {event.exerciseType}</WrapItem>
            <WrapItem>Intensity: {event.intensity}</WrapItem>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default EventCard;
