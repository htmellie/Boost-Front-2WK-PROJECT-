import React from "react";
import GenericButton from "../GenericButton";
import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import DateAndTimePickers from "../TimeAndDatePicker";

function CreateEvent() {
  function checkButtonClicks(num) {
    console.log(`you clicked ${num}`);
  }

  return (
    <Box>
      <Heading>Create Event</Heading>

      <GenericButton
        text={"What is your event?"}
        handleClick={() => checkButtonClicks(1)}
      />
      <DateAndTimePickers />
      <GenericButton
        text={"Where is your?"}
        handleClick={() => checkButtonClicks(2)}
      />
      <GenericButton
        text={"What do you want to do?"}
        handleClick={() => checkButtonClicks(3)}
      />
      <GenericButton text={"Submit"} handleClick={() => checkButtonClicks(4)} />
    </Box>
  );
}

export default CreateEvent;
