import React from 'react';
import styles from './css/users.module.css';

const UserCard = () => {
  return (
    <div className={styles.userCard}>
      <div className={styles.overflowTrim}>
        <img
          className={styles.userPicture}
          src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
        ></img>
        <p className={styles.username}>superduperlongusername</p>
      </div>
    </div>
  );
};

export default UserCard;
