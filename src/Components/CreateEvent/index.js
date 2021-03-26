import React, { useState, useEffect, useReducer } from "react";
import GenericButton from "../GenericButton";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  VStack,
  Input,
} from "@chakra-ui/react";
import DateAndTimePickers from "../DateAndTimePicker";
import ExerciseDropdown from "../ExerciseDropdown";
import LocationMapPicker from "../LocationMapPicker/index";
import IntensityDropdown from "../IntensityDropdown";
import EventNameInput from "Components/EventNameInput";

const initialEvent = {
  name: "",
  description: "",
  exerciseType: "",
  longitude: 0,
  latitude: 0,
  time: "0",
  intensity: "",
  groupId: 0,
};

function reducer(event, action) {
  switch (action.type) {
    case "SET_EXERCISE":
      return { ...event, exerciseType: action.payload };
    case "SET_DATE_AND_TIME":
      return { ...event, time: action.payload };
    case "SET_LOCATION":
      return {
        ...event,
        longitude: action.payload.lng,
        latitude: action.payload.lat,
      };
    case "SET_INTENSITY":
      return {
        ...event,
        intensity: action.payload,
      };
    case "SET_EVENT_NAME":
      return {
        ...event,
        name: action.payload,
      };
    default:
      return event;
  }
}

function CreateEvent() {
  const [event, dispatch] = useReducer(reducer, initialEvent);

  function checkButtonClicks(num) {
    console.log(`you clicked ${num}`);
  }

  console.log(event);

  //need text box which updates value
  //need to get lat and long form Eventmap...maybe send down a setstate
  //need to get date and time from calander
  //does the whole thing need to be in a form?

  return (
    <Box>
      <VStack>
        <Heading>Create Event</Heading>
        <EventNameInput dispatch={dispatch} />
        <IntensityDropdown dispatch={dispatch} />

        <GenericButton
          text={"When is your event?"}
          handleClick={() => checkButtonClicks(1)}
        />

        <DateAndTimePickers dispatch={dispatch} />
        <GenericButton
          text={"Where is your event?"}
          handleClick={() => checkButtonClicks(2)}
        />

        <LocationMapPicker dispatch={dispatch} />

        <GenericButton
          text={"What do you want to do?"}
          handleClick={() => checkButtonClicks(3)}
        />
        <ExerciseDropdown dispatch={dispatch} />

        <GenericButton
          text={"Submit"}
          handleClick={() => checkButtonClicks(4)}
        />
      </VStack>
    </Box>
  );
}

export default CreateEvent;
