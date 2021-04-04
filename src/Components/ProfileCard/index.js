import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Link,
  useColorModeValue,
  Image,
  Flex,
  // HStack,
  // Grid,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import LogoutButton from 'Components/LogoutButton';

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
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        border="1px solid lightgray"
        boxShadow="xl"
        rounded="md"
        overflow="hidden"
      >
        <Image
          h="120px"
          w="full"
          src="https://picsum.photos/320/120"
          objectFit="cover"
        />

        <Flex justify={'center'} mt={-12}>
          <Avatar
            border="2px solid white"
            size="xl"
            src={picture}
            alt={firstName}
            mb={4}
            pos="relative"
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
        </Flex>
        <Heading fontSize="2xl" textAlign="center">
          {`${firstName} ${surname}`}
        </Heading>
        <Text textAlign="center" fontWeight={600} color="gray.500" mb={4}>
          @{username}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          <Heading size="xs" color="gray.400">
            {isAdmin ? 'ADMIN OF' : 'PART OF'}
          </Heading>
          <Link color="blue.400">
            <RouterLink to="/GroupFeed">#{group}</RouterLink>
          </Link>
        </Text>

        {/* <Grid placeItems="center" pt={8}>
          <HStack>
            <Text className="material-icons" color="gray.500" fontSize="2xl">
              schedule
            </Text>
            <Heading size="xl" color="gray.500" fontSize="2xl">
              {hours + ' HOURS'}
            </Heading>
          </HStack>
        </Grid> */}

        <Box p={10} textAlign="right">
          <LogoutButton size="sm" bg="red.300" />
        </Box>
      </Box>
    </Center>
  );
}

export default ProfileCard;
