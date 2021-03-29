import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  HStack,
} from '@chakra-ui/react';
import GenericButton from 'Components/GenericButton';
import { getGroupByName, updateUser } from 'Libs/httpRequests';
import { useUserContext } from 'Libs/userContext';
import React, { useEffect, useState } from 'react';

function GroupForm({ userToPost, dispatch }) {
  const { dbUser, setDbUser } = useUserContext();

  const [groupName, setGroupName] = useState('');
  const [groupExists, setGroupExists] = useState(false);
  const [toUpdate, setToUpdate] = useState(false);

  function handleGroupCheck() {
    getGroupByName(process.env.REACT_APP_BACKEND_URL, groupName, (group) => {
      if (groupName === group.name) {
        dispatch({ type: 'SET_PART_OF_GROUP_ID', payload: group.id });
        setGroupExists(true);
      }
    });
  }

  useEffect(() => {
    if (toUpdate) {
      updateUser(
        process.env.REACT_APP_BACKEND_URL,
        dbUser?.id,
        userToPost,
        (user) => {
          setDbUser(user);
        }
      );
    }
  }, [toUpdate]);

  console.log('this is user id' + dbUser?.id);

  return (
    <>
      <GridItem padding="50px 0">
        <FormControl padding="5px 0" isRequired>
          <FormLabel>
            Please enter group name to create or join a group
          </FormLabel>
          <Input
            placeholder="Group Name"
            onChange={(e) => {
              setGroupName(e.target.value);
            }}
          />
        </FormControl>
      </GridItem>
      <GenericButton text="Submit" handleClick={handleGroupCheck} />
      {groupExists && (
        <GridItem padding="50px 0">
          <FormControl padding="5px 0" isRequired>
            <FormLabel>
              Would you like to join {groupName} at {userToPost.partOfGroupId}?
            </FormLabel>
            <HStack>
              <GenericButton
                text="Yes"
                handleClick={() => {
                  setToUpdate(true);
                }}
              />
              <GenericButton
                text="No"
                handleClick={() => {
                  console.log('no');
                }}
              />
            </HStack>
          </FormControl>
        </GridItem>
      )}
    </>
  );
}

export default GroupForm;
