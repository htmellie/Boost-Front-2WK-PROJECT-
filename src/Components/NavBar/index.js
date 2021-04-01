import React from 'react';

import NavLink from '../NavLink';
import { Flex } from '@chakra-ui/react';

function NavBar() {
  return (
    <Flex
      position="fixed"
      bottom={[0, 0, 0, null]}
      top={[null, null, null, 0]}
      bg="#edf2f7"
      flexDirection={['row', 'row', 'row', 'column']}
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'left',
      ]}
      width={['100%', '100%', '100%', '10%']}
      height={['max-content', 'max-content', 'max-content', '100%']}
    >
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/CreateEvent">Create Event</NavLink>
      <NavLink to="/GroupFeed">Group Feed</NavLink>
    </Flex>
  );
}

export default NavBar;
