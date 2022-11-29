import React from 'react';
import { useEffect, useState } from 'react';
//chakra
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Users } from '../components/chat/Users.js';
import { ChatRooms } from '../components/chat/ChatRooms.js';
import { ChatBox } from '../components/chat/ChatBox.js';
import styles from './css/chatpage.module.css';

const LandingPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {};

  return (
    <div className={styles.container}>
      <div className={styles.chatRoomContainer}>
        <ChatRooms />
      </div>
      <div className={styles.chatContainer}>
        <ChatBox />
      </div>
      <div className={styles.userContainer}>
        <Users />
      </div>
    </div>
  );
};

export default LandingPage;
