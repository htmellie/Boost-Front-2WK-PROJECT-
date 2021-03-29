import React, { useReducer, useState } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";
import GenericButton from "Components/GenericButton";
import { postGroup, getGroupByName, postUser } from "Libs/httpRequests";
import { useUserContext } from "../../Libs/userContext";
import { useAuth0 } from "@auth0/auth0-react";
const initialUserToPost = {
  firstName: "",
  surname: "",
  username: "",
  hours: 0,
  partOfGroupId: null,
  adminOfGroupId: null,
  eventsIds: [],
};
function reducer(userToPost, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...userToPost, firstName: action.payload };
    case "SET_SURNAME":
      return { ...userToPost, surname: action.payload };
    case "SET_USERNAME":
      return { ...userToPost, username: action.payload };
    case "SET_HOURS":
      return { ...userToPost, hours: action.payload };
    case "SET_PART_OF_GROUP_ID":
      console.log(action.payload);
      return { ...userToPost, partOfGroupId: action.payload };
    case "SET_ADMIN_OF_GROUP_ID":
      return { ...userToPost, adminOfGroupId: action.payload };
    case "SET_EVENTS_IDS":
      return { ...userToPost, eventsIds: action.payload };
    default:
      return userToPost;
  }
}
function NewUserForm() {
  const { user : auth0User } = useAuth0();
  const { setDbUser } = useUserContext();
  const [userToPost, dispatch] = useReducer(reducer, initialUserToPost);
  const handleFirstName = (e) => {
    // @ts-ignore
    dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
  };
  const handleSurname = (e) => {
    // @ts-ignore
    dispatch({ type: "SET_SURNAME", payload: e.target.value });
  };

  function handlePost() {
    // @ts-ignore
    dispatch({ type: "SET_USERNAME", payload: auth0User.nickname });
    postUser(process.env.REACT_APP_BACKEND_URL, (postedUser) =>{setDbUser(postedUser)});
  }

  console.log(userToPost);
  return (
    <Grid
      boxShadow="lg"
      padding="30px 50px"
      borderRadius={[null, "10px"]}
      width={["100%", "60%"]}
      maxW="max-content"
    >
      <Heading size="xl">Welcome</Heading>
      <Heading size="sm" color="gray.300">
        Please enter some details to register.
      </Heading>
      <GridItem padding="50px 0">
        <FormControl padding="5px 0" isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" onChange={handleFirstName} />
        </FormControl>
        <FormControl padding="5px 0" isRequired>
          <FormLabel>Surname</FormLabel>
          <Input placeholder="Surname" onChange={handleSurname} />
        </FormControl>
      </GridItem>
      <GenericButton
        text="Submit"
        handleClick={ handlePost }
      />
    </Grid>
  );
}
export default NewUserForm;
