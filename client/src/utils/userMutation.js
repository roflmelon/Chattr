import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $picture: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      picture: $picture
    ) {
      token
      user {
        _id
        username
        email
        picture
      }
    }
  }
`;
