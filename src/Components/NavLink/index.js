import React from 'react';

import { Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavLink({ to, children, ...props }) {
  return (
    <Box width="100%" {...props}>
      <Link to={to}>
        <Button
          borderRadius="0"
          width={'100%'}
          _hover={{
            background: '#b0dfe0',
          }}
          _focus={{ border: 'none' }}
        >
          {children}
        </Button>
      </Link>
    </Box>
  );
}

export default NavLink;
