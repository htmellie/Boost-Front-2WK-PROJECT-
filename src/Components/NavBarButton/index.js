import React from "react";
import { ListItem } from "@chakra-ui/react";

function NavBarButton({ children }) {
  return (
    <ListItem
      float="left"
      display="block"
      color="#f2f2f2"
      text-align="center"
      padding="14px 16px"
      text-decoration="none"
      font-size="17px"
      _hover={{
        background: "#FACD60",
        color: "#fff",
      }}
    >
      {children}
    </ListItem>
  );
}

export default NavBarButton;
