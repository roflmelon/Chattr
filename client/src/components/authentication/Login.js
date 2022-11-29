import React from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { LOGIN_USER } from '../../utils/userMutation';
import Auth from '../../utils/auth';

const Login = () => {
  const [show, setShow] = useState('Show');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const showPassword = () => {
    setShow(!show);
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'Please Fill Out All Fields!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }

    try {
      const { data } = await login({
        variables: {
          email: email,
          password: password,
        },
      });
      Auth.login(data.login.token);

      toast({
        title: 'Signed In!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <VStack spacing="1rem">
      {/* email input */}
      <FormControl id="email" isRequired>
        <FormLabel>Email:</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      {/* password input */}
      <FormControl id="password" isRequired>
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'password' : 'text'}
            placeholder="Enter Your Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPassword}>
              {show ? 'Show' : 'Hide'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* form submit */}
      <Button
        colorScheme="green"
        width="50%"
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
