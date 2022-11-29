import { Button } from '@chakra-ui/react';
import React from 'react';
import Auth from '../../utils/auth';

const Logout = () => {
  const submitHandler = () => {
    Auth.logout();
  };

  return (
    <Button colorScheme="red" width="100%" onClick={submitHandler}>
      Logout
    </Button>
  );
};

export default Logout;
