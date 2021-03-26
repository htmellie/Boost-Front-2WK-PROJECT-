import React from 'react';
import { Select } from '@chakra-ui/react';

function ExerciseDropdown({ dispatch }) {
  const setExercise = (e) => {
    dispatch({ type: 'SET_EXERCISE', payload: e.target.value });
  };

  return (
    <Select placeholder="Select option" onChange={setExercise}>
      <option value="Run">Run</option>
      <option value="Cycle">Cycle</option>
      <option value="Bootcamp">Bootcamp</option>
    </Select>
  );
}

export default ExerciseDropdown;
