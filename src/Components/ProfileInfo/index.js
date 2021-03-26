import { useAuth0 } from "@auth0/auth0-react";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import GenericButton from "Components/GenericButton";
import LogoutButton from "Components/LogoutButton";
import {
  getUserByUsername,
  getGroupById,
  getEventById,
  getManyEventsByIds,
  postUser,
} from "Libs/httpRequests";
import React, { useEffect, useState } from "react";

function ProfileInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user.nickname);

  const [databaseUser, setDatabaseUser] = useState({
    id: 0,
    firstName: "",
    surname: "",
    username: "",
    hours: 0,
    partOfGroupId: 0,
    adminOfGroupId: 0,
    eventsIds: [],
  });
  const [partOfGroup, setPartOfGroup] = useState(null);
  const [eventsWillAttend, setEventsWillAttend] = useState([
    {
      id: 0,
      name: "",
      description: "",
      exerciseType: "",
      longitude: 0,
      latitude: 0,
      time: "2021-04-09T19:10:25",
      intensity: "",
      groupId: 0,
    },
  ]);
  const [nextEvent, setNextEvent] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newUser, setNewUser] = useState({
    firstName: "jack",
    surname: "InTheBox",
    username: "bounce",
    hours: 0,
    partOfGroupId: 2,
    adminOfGroupId: 2,
    eventsIds: [1, 2],
  });

  useEffect(() => {
    getUserByUsername(
      process.env.REACT_APP_BACKEND_URL,
      "lucaxue",
      setDatabaseUser
    );
  }, [isAuthenticated]);

  useEffect(() => {
    getGroupById(
      process.env.REACT_APP_BACKEND_URL,
      databaseUser?.partOfGroupId,
      setPartOfGroup
    );

    getManyEventsByIds(
      process.env.REACT_APP_BACKEND_URL,
      databaseUser?.eventsIds,
      setEventsWillAttend
    );
  }, [databaseUser]);

  useEffect(() => {
    if (eventsWillAttend.length !== 0) {
      const futureEvents = eventsWillAttend.filter(
        (event) => new Date(event.time) > new Date(Date.now())
      );
      console.log(futureEvents);
      setNextEvent(
        futureEvents.reduce((acc, cur) =>
          new Date(cur.time) < new Date(acc.time) ? cur : acc
        )
      );
    }

    //console.log(nextEvent);
  }, [eventsWillAttend]);

  if (
    isLoading ||
    !databaseUser ||
    !partOfGroup ||
    eventsWillAttend.length === 0 ||
    !nextEvent
  ) {
    return <div>Loading</div>;
  }

  function handleSubmit() {}

  return (
    isAuthenticated && (
      <Box>
        <LogoutButton />
        <Grid
          placeItems="center"
          border="4px"
          borderColor="#FACD60"
          width="75%"
          height="75%"
          margin="auto"
          mt="5"
          borderRadius="md"
        >
          <GridItem>Welcome, {databaseUser.username}!</GridItem>
          <GridItem>
            <img src={user.picture} alt={user.name} />
          </GridItem>
          <GridItem>{user.email}</GridItem>
          <GridItem>Group: {partOfGroup}</GridItem>
          <GridItem>Next Session:{nextEvent.name} </GridItem>
          <GridItem>Total exercise hours: {databaseUser.hours}</GridItem>
        </Grid>
        <Input
          placeholder="insert First name"
          onChange={(e) => {
            setFirstName(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Input
          placeholder="insert Last name"
          onChange={(e) => {
            setLastName(e.target.value);
            console.log(e.target.value);
          }}
        />
        <GenericButton
          text="Submit"
          handleClick={() =>
            postUser(process.env.REACT_APP_BACKEND_URL, newUser)
          }
        />
      </Box>
    )
  );
}

export default ProfileInfo;

//creating a new user based on user.nickname from Auth0 user obj, and other information that the user will give us on the profile page

//new User object state
