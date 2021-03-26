import React from "react";
import { Select } from "@chakra-ui/react";

function whatExercise( {setEventWhat}) {

  function HandleChange(e){
    setEventWhat(e.target.value)
    console.log(e.target.value);
  }

  return (
    <Select placeholder="Select option" onChange={HandleChange}>
      <option value="option1">Run</option>
      <option value="option2">Cycle</option>
      <option value="option3">Bootcamp</option>
    </Select>
  );
}

export default whatExercise;
