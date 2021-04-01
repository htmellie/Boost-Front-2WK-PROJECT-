import { useState } from 'react';
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  WrapItem,
  Heading,
  GridItem,
} from '@chakra-ui/react';
import { getAddress, updateUser } from '../../Libs/httpRequests';
import GenericButton from 'Components/GenericButton';
import { useUserContext } from 'Libs/userContext';

function EventCard({
  name,
  time,
  longitude,
  latitude,
  description,
  exerciseType,
  intensity,
  willAttend,
  id,
}) {
  const date = new Date(time).toString().slice(0, 15);
  const timeOfEvent = new Date(time).toString().slice(16, 21);

  const { dbUser, setDbUser } = useUserContext();

  const [toUpdateUser, setToUpdateUser] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(dbUser);

  function handleClick() {
    setUserToUpdate({ ...dbUser, eventsIds: [...dbUser?.eventsIds, id] });
    setToUpdateUser(true);
  }
  console.log(userToUpdate);

  useEffect(() => {
    if (toUpdateUser) {
      updateUser(
        process.env.REACT_APP_BACKEND_URL,
        dbUser?.id,
        userToUpdate,
        setDbUser
      );
    }
    // eslint-disable-next-line
  }, [toUpdateUser]);

  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress(
      process.env.REACT_APP_NOMINATIM_URL,
      latitude,
      longitude,
      setAddress
    );
    // eslint-disable-next-line
  }, []);

  return (
    <GridItem>
      <Accordion bg={willAttend ? '#facd60' : 'white'} allowToggle minW="100%">
        <AccordionItem textAlign="center">
          <AccordionButton textAlign="center">
            <Box flex="1" textAlign="center">
              <Heading size="sm">{name}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel textAlign="left" pb={4}>
            <WrapItem>Date: {date}</WrapItem>
            <WrapItem>Time: {timeOfEvent}</WrapItem>
            <WrapItem>
              Location: {address[0]}, {address[1]}, {address[2]}
            </WrapItem>
            <WrapItem>Description: {description}</WrapItem>
            <WrapItem>Exercise Type: {exerciseType}</WrapItem>
            <WrapItem>Intensity: {intensity}</WrapItem>
            <GenericButton
              text="Attend"
              handleClick={handleClick}
              display={willAttend ? 'none' : null}
            ></GenericButton>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </GridItem>
  );
}
export default EventCard;
