import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useState } from 'react';

const SignUp = () => {
  const [show, setShow] = useState('Hide');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [picture, setPicture] = useState('');

  const showPassword = () => {
    setShow(!show);
  };
  const postDetails = (picture) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing="1rem">
      {/* username input */}
      <FormControl id="username" isRequired>
        <FormLabel>Username:</FormLabel>
        <Input
          placeholder="Enter Your Username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormControl>

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
            type={show ? 'text' : 'password'}
            placeholder="Enter A Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPassword}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* confirm password input */}
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Enter A Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPassword}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* picture upload input */}
      <FormControl id="picture">
        <FormLabel>Upload A Profile Picture</FormLabel>
        <Input
          type="file"
          p="1.5"
          accept="image/*"
          onChange={(event) => postDetails(event.target.files[0])}
        />
      </FormControl>

      {/* form submit */}
      <Button colorScheme="green" width="50%" onClick={submitHandler}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
