import React, { useState, useEffect, useReducer } from 'react';
import {
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Grid,
} from '@chakra-ui/react';
import DateAndTimePickers from '../DateAndTimePicker';
import ExerciseDropdown from '../ExerciseDropdown';
import LocationMapPicker from '../LocationMapPicker/index';
import IntensityDropdown from '../IntensityDropdown';
import EventNameInput from '../EventNameInput';
import EventDescriptionInput from '../EventDescriptionInput';
import { postEvent } from '../../Libs/httpRequests';
import { useUserContext } from 'Libs/userContext';

const initialEvent = {
  name: '',
  description: '',
  exerciseType: '',
  longitude: 0,
  latitude: 0,
  time: '0',
  intensity: '',
  groupId: 2,
};

function reducer(event, action) {
  switch (action.type) {
    case 'SET_EXERCISE':
      return { ...event, exerciseType: action.payload };
    case 'SET_DATE_AND_TIME':
      return { ...event, time: action.payload };
    case 'SET_LOCATION':
      return {
        ...event,
        longitude: action.payload.lng,
        latitude: action.payload.lat,
      };
    case 'SET_INTENSITY':
      return {
        ...event,
        intensity: action.payload,
      };
    case 'SET_EVENT_NAME':
      return {
        ...event,
        name: action.payload,
      };
    case 'SET_EVENT_DESCRIPTION':
      return {
        ...event,
        description: action.payload,
      };
    case 'SET_GROUP_ID':
      return {
        ...event,
        groupId: action.payload,
      };
    default:
      return event;
  }
}

function CreateEvent() {
  const { dbUser } = useUserContext();
  const [event, dispatch] = useReducer(reducer, initialEvent);
  const [postedEvent, setPostedEvent] = useState(initialEvent);
  const [toPost, setToPost] = useState(false);

  function handlePost() {
    // @ts-ignore
    dispatch({ type: 'SET_GROUP_ID', payload: dbUser?.partOfGroupId });
    setToPost(true);
  }

  useEffect(() => {
    if (toPost) {
      postEvent(process.env.REACT_APP_BACKEND_URL, event, setPostedEvent);
    }
    // eslint-disable-next-line
  }, [toPost]);

  return (
    <Grid placeItems="center" height={['90vh', '90vh', '90vh', '100vh']}>
      <Heading>Create Event</Heading>
      <EventNameInput dispatch={dispatch} />
      <EventDescriptionInput dispatch={dispatch} />
      <IntensityDropdown dispatch={dispatch} />
      <ExerciseDropdown dispatch={dispatch} />
      <DateAndTimePickers dispatch={dispatch} />
      <LocationMapPicker dispatch={dispatch} />
      <Popover>
        <PopoverTrigger>
          <Button onClick={handlePost}>Submit</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            You have added an event called {postedEvent.name}!
          </PopoverHeader>
          <PopoverBody>Click on the feed to view this event</PopoverBody>
        </PopoverContent>
      </Popover>
    </Grid>
  );
}

export default CreateEvent;
