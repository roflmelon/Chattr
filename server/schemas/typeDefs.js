const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
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
`;

module.exports = typeDefs;
