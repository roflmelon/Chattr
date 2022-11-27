import React from 'react';
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

//login/signup components
import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';

//layout for landing page
const LandingPage = () => {
  return (
    <Container
      maxW="xl"
      centerContent
      d="flex"
      justifyContent="center"
      mb={'1.5rem'}
    >
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={'white'}
        w="100%"
        borderRadius={'lg'}
        borderWidth={'1px'}
        m={'1.5rem 0 1rem 0'}
      >
        <Text fontSize="4xl">Chattr</Text>
      </Box>
      <Box p={4} bg={'white'} w="100%" borderRadius={'lg'} borderWidth={'1px'}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1rem">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* login component */}
              <Login />
            </TabPanel>
            <TabPanel>
              {/* signup component */}
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default LandingPage;
