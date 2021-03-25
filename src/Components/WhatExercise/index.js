import React from "react";
import { Select } from "@chakra-ui/react";

function whatExercise() {
  return (
    <Select placeholder="Select option">
      <option value="option1">Run</option>
      <option value="option2">Cycle</option>
      <option value="option3">Bootcamp</option>
    </Select>
  );
}

export default whatExercise;
