import React from "react";
import { Select } from "@chakra-ui/react";

function ExerciseDropdown({ setEventWhat }) {
  function HandleChange(e) {
    setEventWhat(e.target.value);
    console.log(e.target.value);
  }

  return (
    <Select placeholder="Select option" onChange={HandleChange}>
      <option value="Run">Run</option>
      <option value="Cycle">Cycle</option>
      <option value="Bootcamp">Bootcamp</option>
    </Select>
  );
}

export default ExerciseDropdown;
