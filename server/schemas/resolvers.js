const { User, ChatRoom, Message } = require('../models');
const bcrypt = require('bcrypt');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUsers: async () => {
      return await User.find();
    },
    getUserById: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError(
            'No user found with this email address'
          );
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.log(error.message);
      }
    },
    addUser: async (
      parent,
      {
        username,
        email,
        password,
        picture = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      }
    ) => {
      try {
        const user = await User.create({
          username,
          email,
          password,
          picture,
        });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.log(error.message);
      }
    },
    addMessage: async (parent, { id, content, chatRoom }) => {
      return await Message.create({ _id: id, content, chatRoom });
    },
    addChatRoom: async (
      parent,
      { roomName, isGroupChat, userId, latestMessage, groupAdmin }
    ) => {
      return await ChatRoom.create({
        roomName,
        isGroupChat,
        users: userId,
        latestMessage,
        groupAdmin,
      });
    },
  },
};

module.exports = resolvers;
