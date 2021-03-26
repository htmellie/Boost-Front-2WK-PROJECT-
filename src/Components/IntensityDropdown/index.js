import React from "react";
import { Select } from "@chakra-ui/react";

function IntensityDropdown({ dispatch }) {
  const setIntensity = (e) => {
    dispatch({ type: "SET_INTENSITY", payload: e.target.value });
  };

  return (
    <Select placeholder="Select option" onChange={setIntensity}>
      <option value="Easy">Easy</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Hard">Hard</option>
    </Select>
  );
}

export default IntensityDropdown;
