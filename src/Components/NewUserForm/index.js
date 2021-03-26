import React, { useReducer } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import GenericButton from "Components/GenericButton";
import { postUser } from "Libs/httpRequests";

const initialUser = {
  firstName: "",
  surname: "",
  username: "",
  hours: 0,
  partOfGroupId: 0,
  adminOfGroupId: 0,
  eventsIds: [],
};

function reducer(user, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...user, firstName: action.payload };
    case "SET_SURNAME":
      return { ...user, surname: action.payload };
    case "SET_HOURS":
      return { ...user, hours: action.payload };
    case "SET_PART_OF_GROUP_ID":
      return { ...user, partOfGroupId: action.payload };
    case "SET_ADMIN_OF_GROUP_ID":
      return { ...user, adminOfGroupId: action.payload };
    case "SET_EVENTS_IDS":
      return { ...user, eventsIds: action.payload };
  }
}

function NewUserForm() {
  const [user, dispatch] = useReducer(reducer, initialUser);
  const setFirstName = (e) => {
    // @ts-ignore
    dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
  };
  const setSurname = (e) => {
    // @ts-ignore
    dispatch({ type: "SET_SURNAME", payload: e.target.value });
  };
  console.log(user);
  return (
    <>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" onChange={setFirstName} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Surname</FormLabel>
        <Input placeholder="Surname" onChange={setSurname} />
      </FormControl>
      <GenericButton
        text="Submit"
        handleClick={() => postUser(process.env.REACT_APP_BACKEND_URL, user)}
      />
    </>
  );
}

export default NewUserForm;
