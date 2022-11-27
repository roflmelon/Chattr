import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    const { data } = await axios.get('/api/chat');
    console.log(data);
    setChats(data);
  };

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default LandingPage;
