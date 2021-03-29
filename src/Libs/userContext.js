import React, {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getGroupById, getUserByUsername } from "./httpRequests";
const UserContext = createContext({ userToDisplay: null, setDbUser: null });
const initialUserToDisplay = {
  id: null,
  firstName: "",
  surname: "",
  picture: "",
  username: "",
  group: "",
  hours: 0,
  isAdmin: false,
};
function reducer(userToDisplay, action) {
  switch (action.type) {
    case "SET_ID":
      return { ...userToDisplay, id: action.payload };
    case "SET_FIRST_NAME":
      return { ...userToDisplay, firstName: action.payload };
    case "SET_SURNAME":
      return { ...userToDisplay, surname: action.payload };
    case "SET_PICTURE":
      return { ...userToDisplay, picture: action.payload };
    case "SET_USERNAME":
      return { ...userToDisplay, username: action.payload };
    case "SET_GROUP":
      return { ...userToDisplay, group: action.payload };
    case "SET_HOURS":
      return { ...userToDisplay, hours: action.payload };
    case "SET_IS_ADMIN":
      return { ...userToDisplay, isAdmin: action.payload };
    // case 'SET_IS_LOADED':
    //   return { ...userToDisplay, isLoaded: action.payload };
    default:
      return userToDisplay;
  }
}
export function UserContextProvider({ children }) {
  const { user: auth0User, isAuthenticated } = useAuth0();
  const [dbUser, setDbUser] = useState({
    id: 0,
    firstName: "",
    surname: "",
    username: "",
    hours: 0,
    partOfGroupId: 0,
    adminOfGroupId: 0,
    eventsIds: [],
  });
  const [userToDisplay, dispatch] = useReducer(reducer, initialUserToDisplay);
  //set full name and username with auth0 details
  //then fetches dbUser
  useEffect(() => {
    console.log(auth0User);
    // @ts-ignore
    dispatch({ type: "SET_USERNAME", payload: auth0User?.nickname });
    getUserByUsername(
      process.env.REACT_APP_BACKEND_URL,
      auth0User?.nickname,
      (data) => {
        setDbUser(data[0]);
      }
    );
  }, [isAuthenticated]);
  //if dbUser exists,
  //set the rest of the details
  useEffect(() => {
    console.log(dbUser);
    if (dbUser) {
      // @ts-ignore
      dispatch({ type: "SET_FIRST_NAME", payload: dbUser.firstName });
      // @ts-ignore
      dispatch({ type: "SET_SURNAME", payload: dbUser.surname });
      // @ts-ignore
      dispatch({
        type: "SET_ID",
        payload: dbUser.id,
      });
      // @ts-ignore
      dispatch({
        type: "SET_IS_ADMIN",
        payload: dbUser.partOfGroupId === dbUser.adminOfGroupId,
      });
      // @ts-ignore
      dispatch({ type: "SET_PICTURE", payload: auth0User?.picture });
      // @ts-ignore
      dispatch({ type: "SET_HOURS", payload: dbUser.hours });
      if (dbUser.partOfGroupId !== 0 || dbUser.adminOfGroupId !== 0) {
        getGroupById(
          process.env.REACT_APP_BACKEND_URL,
          dbUser.partOfGroupId,
          (group) => {
            // @ts-ignore
            dispatch({ type: "SET_GROUP", payload: group.name });
          }
        );
      }
    }
  }, [dbUser]);
  return (
    <UserContext.Provider
      value={{ userToDisplay: userToDisplay, setDbUser: setDbUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const useUserContext = () => useContext(UserContext);
