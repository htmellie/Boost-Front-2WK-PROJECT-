import { useState } from "react";
import React, { useEffect } from "react";
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
import { getAddress } from "../../Libs/httpRequests";
import GenericButton from "Components/GenericButton";
import { useUserContext } from "Libs/userContext";

function EventCard({
  name,
  time,
  longitude,
  latitude,
  description,
  exerciseType,
  intensity,
  groupId,
  id,
}) {
  const date = new Date(time).toString().slice(0, 15);
  const timeOfEvent = new Date(time).toString().slice(16, 21);

  const { dbUser } = useUserContext();

  function handleClick() {
    console.log(dbUser);
    //when attending button is clicked,
    //get existing events array from user context?
    console.log(`${dbUser.firstName} is attending event with id ${id}`);
    //dbUser.eventsIds.push(id);
    //console.log(dbUser.eventsIds);
    //spread array
    //check if event id is already in the array
    //push event id into the array
    //post array to users table
  }

  let lng = longitude;
  let lat = latitude;

  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress(process.env.REACT_APP_NOMINATIM_URL, lat, lng, setAddress);
  }, []);

  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <WrapItem>Date: {date}</WrapItem>
            <WrapItem>Time: {timeOfEvent}</WrapItem>
            <WrapItem>
              Location: {address[0]}, {address[1]}, {address[2]}
            </WrapItem>
            <WrapItem>Description: {description}</WrapItem>
            <WrapItem>Exercise Type: {exerciseType}</WrapItem>
            <WrapItem>Intensity: {intensity}</WrapItem>
            <GenericButton
              text="Attending"
              handleClick={handleClick}
            ></GenericButton>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default EventCard;
