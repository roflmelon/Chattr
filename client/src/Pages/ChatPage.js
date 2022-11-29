import React from 'react';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {};

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default LandingPage;
