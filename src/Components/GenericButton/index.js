import React from "react";
import { Button } from "@chakra-ui/react";

const GenericButton = ({ text, handleClick }) => {
  return (
    <Button bg="#1AC0C6" size="md" textColor="#fff" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default GenericButton;
