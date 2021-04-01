import React from 'react';
import TextField from '@material-ui/core/TextField';
import {  FormControl, FormLabel, Grid } from '@chakra-ui/react';

function DateAndTimePickers({ dispatch }) {
  function setDateAndTime(e) {
    dispatch({ type: 'SET_DATE_AND_TIME', payload: e.target.value });
  }

  const currentTime = new Date(Date.now()).toISOString().slice(0, -8);

  return (
    <FormControl padding="5px 0">
      <FormLabel marginBottom="5px">Date and time</FormLabel>
      <Grid
        border="1px"
        borderColor="gray.200"
        borderRadius="7px"
        padding="10px"
        placeItems="center"
      >
        <TextField
          onChange={setDateAndTime}
          id="datetime-local"
          type="datetime-local"
          defaultValue={currentTime}
          fullWidth={true}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </FormControl>
  );
}

export default DateAndTimePickers;
