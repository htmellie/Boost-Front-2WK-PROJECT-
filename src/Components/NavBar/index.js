import React from "react";
import { Link } from "react-router-dom";
import { Box, Center, UnorderedList } from "@chakra-ui/react";
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
          <Center>
            <NavBarButton>
              <Link to="/">Profile</Link>
            </NavBarButton>
          </Center>
          <Spacer />
          <Center>
            <NavBarButton>
              <Link to="/CreateEvent">Create Event</Link>
            </NavBarButton>
          </Center>
          <Spacer />
          <Center>
            <NavBarButton>
              <Link to="/GroupFeed">Group Feed</Link>
            </NavBarButton>
          </Center>
          <Spacer />
        </Flex>
      </UnorderedList>
    </Box>
  );
}

export default NavBar;
