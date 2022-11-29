const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    picture: String
  }
  type Message {
    sender: ID
    content: String
    chat: ID
  }
  type ChatRoom {
    roomName: ID!
    isGroupChat: Boolean
    users: [User]
    latestMessage: String
    groupAdmin: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUsers: [User]
    getUserById(userId: ID!): User
    chatRoom: [ChatRoom]
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(
      username: String!
      email: String!
      password: String!
      picture: String
    ): Auth

    addMessage(userId: ID!, content: String!, chatRoomId: ID!): Message

    addChatRoom(
      roomName: String!
      isGroupChat: Boolean
      userId: [ID!]
      latestMessage: String
      groupAdmin: ID!
    ): ChatRoom
  }
`;

module.exports = typeDefs;
