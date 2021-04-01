import React from 'react';
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

function ExerciseDropdown({ dispatch }) {
  const setExercise = (e) => {
    dispatch({ type: 'SET_EXERCISE', payload: e.target.value });
  };

  return (
    <FormControl padding="5px 0" isRequired>
      <FormLabel>Exercise Type</FormLabel>
      <Select placeholder="Select options" onChange={setExercise}>
        <option value="Run">Run</option>
        <option value="Cycle">Cycle</option>
        <option value="Bootcamp">Bootcamp</option>
        <option value="Other">Other</option>
      </Select>
    </FormControl>
  );
}

export default ExerciseDropdown;
