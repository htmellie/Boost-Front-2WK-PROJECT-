import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  HStack,
} from '@chakra-ui/react';
import GenericButton from 'Components/GenericButton';
import { getGroupByName, postGroup, updateUser } from 'Libs/httpRequests';
import { useUserContext } from 'Libs/userContext';
import React, { useEffect, useState } from 'react';

function GroupForm({ userToPost, dispatch }) {
  const { dbUser, setDbUser } = useUserContext();

  const [groupName, setGroupName] = useState('');
  const [groupExists, setGroupExists] = useState('undetermined');
  const [toUpdate, setToUpdate] = useState(false);
  const [toCreateGroup, setToCreateGroup] = useState(false);

  function handleGroupCheck() {
    getGroupByName(
      process.env.REACT_APP_BACKEND_URL,
      groupName,
      (group) => {
        if (groupName === group.name) {
          dispatch({ type: 'SET_PART_OF_GROUP_ID', payload: group.id });
          setGroupExists('true');
        }
      },
      () => {
        setGroupExists('false');
      }
    );
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
    // eslint-disable-next-line
  }, [toUpdate]);

  console.log('this is user id' + dbUser?.id);

  useEffect(() => {
    if (toCreateGroup) {
      postGroup(
        process.env.REACT_APP_BACKEND_URL,
        { name: groupName },
        (group) => {
          dispatch({ type: 'SET_PART_OF_GROUP_ID', payload: group.id });
          dispatch({ type: 'SET_ADMIN_OF_GROUP_ID', payload: group.id });
          setToUpdate(true);
        }
      );
    }
    // eslint-disable-next-line
  }, [toCreateGroup]);

  return (
    <>
      {groupExists === 'undetermined' && (
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
        </>
      )}
      {groupExists === 'true' && (
        <GridItem padding="50px 0">
          <FormControl padding="5px 0" isRequired>
            <FormLabel>
              {groupName} is an existing group, would you like to join it?
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
                  setGroupExists('undetermined');
                }}
              />
            </HStack>
          </FormControl>
        </GridItem>
      )}
      {groupExists === 'false' && (
        <GridItem padding="50px 0">
          <FormControl padding="5px 0" isRequired>
            <FormLabel>
              Group {groupName} does not exist would you like to create this
              group?
            </FormLabel>
            <HStack>
              <GenericButton
                text="Yes"
                handleClick={() => {
                  setToCreateGroup(true);
                }}
              />
              <GenericButton
                text="No"
                handleClick={() => {
                  setGroupExists('undetermined');
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
