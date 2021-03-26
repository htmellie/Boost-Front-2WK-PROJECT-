import { Input } from "@chakra-ui/react";
import React from "react";

function EventDescriptionInput({ dispatch }) {
  const setEventDescription = (e) => {
    dispatch({ type: "SET_EVENT_DESCRIPTION", payload: e.target.value });
  };
  return <Input placeholder="Enter event description" onChange={setEventDescription} />;
}

export default EventDescriptionInput;
