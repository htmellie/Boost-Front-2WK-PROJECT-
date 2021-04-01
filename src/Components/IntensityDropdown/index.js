import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

function IntensityDropdown({ dispatch }) {
  const setIntensity = (e) => {
    dispatch({ type: 'SET_INTENSITY', payload: e.target.value });
  };

  return (
    <FormControl padding="5px 0">
      <FormLabel>Intensity</FormLabel>
      <Select placeholder="Select options" onChange={setIntensity}>
        <option value="Easy">Easy</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Hard">Hard</option>
      </Select>
    </FormControl>
  );
}

export default IntensityDropdown;
