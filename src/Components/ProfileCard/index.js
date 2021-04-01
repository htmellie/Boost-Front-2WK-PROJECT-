import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
function ProfileCard({
  firstName,
  surname,
  picture,
  username,
  group,
  hours,
  isAdmin,
}) {
  return (
    <Grid
      boxShadow="lg"
      placeItems="center"
      padding="30px 30px"
      borderRadius={["10px", "10px", "10px", "10px"]}
      bg="#1ac0c6"
      templateColumns={[null, null, "4fr 5fr"]}
      transition="0.2s"
      width={["95%", "70%", "max-content"]}
      margin="10%"
    >
      <Image
        borderRadius="full"
        src={picture}
        alt={firstName}
        objectFit="cover"
        boxShadow="md"
        boxSize={["200px", "200px", "300px"]}
        padding="0.5em"
        bg="white"
        margin="10%"
      />


      <Box
        bg="white"
        padding="5%"
        borderRadius={["10px", "10px", "10px", "10px"]}
      >
        <GridItem>
          <GridItem padding="10px 0">
            <HStack>
              <Heading
                size={"xl"}
                fontSize={["2rem", "2rem", "3rem"]}
                color="gray.800"
              >
                {`${firstName} ${surname}`}
              </Heading>
            </HStack>
            <Text
              marginTop="-5px"
              color="gray.400"
              size="xs"
              fontSize={["1em", "1em", "1.5em"]}
            >
              {"@" + username}
            </Text>
          </GridItem>
          <GridItem padding="10px 0" fontSize={["1em", "1em", "1.2em"]}>
            <Heading size="xs" color="gray.300">
              {isAdmin ? "ADMIN" : "PART OF"}
            </Heading>
            <Text size="sm">{group}</Text>
          </GridItem>
          <GridItem margin="10px 0">
            <HStack>
              {/* <Text
                className="material-icons"
                color="gray.500"
                fontSize={["1.5em", "1.5em", "2.5em"]}
              >
                schedule
              </Text>
              <Heading
                size="xl"
                color="gray.500"
                fontSize={["1.5em", "1.5em", "2.5em"]}
              >
                {hours + " HOURS"}
              </Heading> */}
            </HStack>
          </GridItem>
        </GridItem>
      </Box>

    </Grid>
  );
}
export default ProfileCard;
