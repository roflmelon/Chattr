import React from 'react';
import { useQuery } from '@apollo/client';
import styles from './css/users.module.css';
import Logout from '../authentication/Logout';
import UserCard from './UserCard.js';
import { QUERY_USERS } from '../../utils/userQuery';

export const Users = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.getUsers || [];
  console.log(users);

  return (
    <div className={styles.container}>
      <Logout />
      <h2 className={styles.userBoxTitle}>Users:</h2>
      {loading ? <div>Loading...</div> : <UserCard />}
    </div>
  );
};
