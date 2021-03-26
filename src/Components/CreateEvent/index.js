import React, {useState, useEffect,useReducer} from "react";
import GenericButton from "../GenericButton";
import { Box, Grid, GridItem, HStack, Heading, VStack } from "@chakra-ui/react";
import DateAndTimePickers from "../TimeAndDatePicker";
import WhatExercise from "../WhatExercise";
import EventMap from '../Map/index';


function CreateEvent() {
  function checkButtonClicks(num) {
    console.log(`you clicked ${num}`);
  }
  
  //need text box which updates value
  //need to get lat and long form Eventmap...maybe send down a setstate
  //need to get date and time from calander
  //does the whole thing need to be in a form?

const[eventWhen,setEventWhen]=useState();


const[eventWhere,setEventWhere]=useState();
const[eventWhat,setEventWhat]=useState();
  
console.log(eventWhen);
console.log(eventWhat);
console.log(eventWhere);

  return (
    <Box>
      <VStack>
        <Heading>Create Event</Heading>


        <GenericButton
          text={"When is your event?"}
          handleClick={() => checkButtonClicks(1)}
        />



        <DateAndTimePickers setEventWhen={setEventWhen} />
        <GenericButton
          text={"Where is your event?"}
          handleClick={() => checkButtonClicks(2)}
        />

<EventMap />

        <GenericButton 
          text={"What do you want to do?"}
          handleClick={() => checkButtonClicks(3)}
        />
        <WhatExercise setEventWhat={setEventWhat}/>

        <GenericButton
          text={"Submit"}
          handleClick={() => checkButtonClicks(4)}
        />
      </VStack>
    </Box>
  );
}

export default CreateEvent;
