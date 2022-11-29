import React from 'react';
import { Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../../utils/userMutation';
import { QUERY_USERS } from '../../utils/userQuery';
import Auth from '../../utils/auth';

const SignUp = () => {
  const [show, setShow] = useState('Show');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
// Error is decleared but never read
  const [addUser, { error }] = useMutation(ADD_USER);

  const showPassword = () => {
    setShow(!show);
  };

  //uploads image to cloudinary
  const postDetails = (picture) => {
    setLoading(false);
    if (picture === undefined) {
      toast({
        title: 'Please select an Image!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    if (picture.type === 'image/jpeg' || picture.type === 'image/png') {
      const data = new FormData();
      data.append('file', picture);
      data.append('upload_preset', 'chattr');
      data.append('cloud_name', 'dstzcxbgk');
      fetch('https://api.cloudinary.com/v1_1/dstzcxbgk/image/upload', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPicture(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: 'Please select an Image!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }
  };

  const submitHandler = async () => {
    setLoading(false);
    if (!username || !email || !password || !confirmPassword) {
      toast({
        title: 'Please Fill Out All Fields!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: 'Passwords Do Not Match!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    if (!picture) {
      toast({
        title: 'Upload a profile picture!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    try {
      const { data } = await addUser({
        variables: {
          username: username,
          email: email,
          password: password,
          picture: picture,
        },
      });
      console.info(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }
  };

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

      {/* confirm password input */}
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'password' : 'text'}
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={showPassword}>
              {show ? 'Show' : 'Hide'}
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
      <Button
        colorScheme="green"
        width="50%"
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
