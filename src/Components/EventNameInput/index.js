import { FormControl, FormLabel, GridItem, Input } from '@chakra-ui/react';
import React from 'react';

function EventNameInput({ dispatch }) {
  const setEventName = (e) => {
    dispatch({ type: 'SET_EVENT_NAME', payload: e.target.value });
  };
  return (
    <FormControl padding="5px 0" isRequired>
      <FormLabel>Event name</FormLabel>
      <Input placeholder="Enter event name" onChange={setEventName} />
    </FormControl>
  );
}

export default EventNameInput;
