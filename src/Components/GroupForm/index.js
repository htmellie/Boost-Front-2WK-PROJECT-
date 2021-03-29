import { FormControl, FormLabel, GridItem, Input } from "@chakra-ui/react";
import GenericButton from "Components/GenericButton";
import { getGroupByName } from "Libs/httpRequests";
import { useUserContext } from "Libs/userContext";
import React, { useEffect, useState } from "react";

function GroupForm() {
  const { setDbUser, dbUser } = useUserContext();
  const [groupName, setGroupName] = useState("");
  const [groupExists, setGroupExists] = useState(false);
  const [groupId, setGroupId] = useState(0);

  function handleGroupCheck() {
    getGroupByName(process.env.REACT_APP_BACKEND_URL, groupName, (group) => {
      if (groupName === group.name) {
        setGroupExists(true);
        setGroupId(group.id);
      }
    });
  }

  useEffect(() => {
    if (groupExists) {
      setDbUser({ ...dbUser, partOfGroupId: groupId });
    }
  }, [groupExists]);

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
    </>
  );
}

export default GroupForm;
