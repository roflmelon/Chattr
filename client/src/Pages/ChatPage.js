import React from 'react';
import { useEffect, useState } from 'react';
//chakra
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Users } from '../components/chat/Users.js';
import { ChatRooms } from '../components/chat/ChatRooms.js';
import { ChatBox } from '../components/chat/ChatBox.js';
import styles from './css/ChatPage.css';

const LandingPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {};

  return <div>asdfsdaf</div>;
};

export default LandingPage;
