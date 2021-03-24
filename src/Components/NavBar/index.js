import React from "react";
import { Link } from "react-router-dom";
import { Box, UnorderedList } from "@chakra-ui/react";
import NavBarButton from "../NavBarButton";

function NavBar() {
  return (
    <Box
      bg="#1ac0c6"
      overflow="hidden"
      position="fixed"
      bottom="0"
      width="100%"
    >
      <UnorderedList>
        <NavBarButton>
          <Link to="/">Profile</Link>
        </NavBarButton>
        <NavBarButton>
          <Link to="/CreateEvent">Create Event</Link>
        </NavBarButton>
        <NavBarButton>
          <Link to="/GroupFeed">Group Feed</Link>
        </NavBarButton>
      </UnorderedList>
    </Box>
  );
}

export default NavBar;
