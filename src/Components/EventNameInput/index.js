import { Input } from "@chakra-ui/react";
import React from "react";

function EventNameInput({ dispatch }) {
  const setEventName = (e) => {
    dispatch({ type: "SET_EVENT_NAME", payload: e.target.value });
  };
  return <Input placeholder="enter event name" onChange={setEventName} />;
}

export default EventNameInput;
