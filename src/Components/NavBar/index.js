import React from "react";
import { Link } from "react-router-dom";
import { Box, UnorderedList } from "@chakra-ui/react";
import NavBarButton from "../NavBarButton";
import { Flex, Spacer } from "@chakra-ui/react";

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
        <Flex>
          <NavBarButton>
            <Link to="/">Profile</Link>
          </NavBarButton>
          <Spacer />
          <NavBarButton>
            <Link to="/CreateEvent">Create Event</Link>
          </NavBarButton>
          <Spacer />
          <NavBarButton>
            <Link to="/GroupFeed">Group Feed</Link>
          </NavBarButton>
        </Flex>
      </UnorderedList>
    </Box>
  );
}

export default NavBar;
