import React from "react";
import GenericButton from "../GenericButton";
import { Box, Grid, GridItem, HStack, Heading, VStack } from "@chakra-ui/react";
import DateAndTimePickers from "../TimeAndDatePicker";
import WhatExercise from "../WhatExercise";

function CreateEvent() {
  function checkButtonClicks(num) {
    console.log(`you clicked ${num}`);
  }

  return (
    <Box>
      <VStack>
        <Heading>Create Event</Heading>

        <GenericButton
          text={"When is your event?"}
          handleClick={() => checkButtonClicks(1)}
        />
        <DateAndTimePickers />
        <GenericButton
          text={"Where is your event?"}
          handleClick={() => checkButtonClicks(2)}
        />
        <GenericButton
          text={"What do you want to do?"}
          handleClick={() => checkButtonClicks(3)}
        />
        <WhatExercise />

        <GenericButton
          text={"Submit"}
          handleClick={() => checkButtonClicks(4)}
        />
      </VStack>
    </Box>
  );
}

export default CreateEvent;
