import React from 'react';
import { Box, TabPanel, TabPanels } from '@chakra-ui/react';

export const Users = () => {
  const styles = {
    userBox: {
      backgroundColor: '#3366ff',
      padding: '1rem',
      borderRadius: '1rem',
      marginBottom: '0.5rem',
      color: 'white',
    },
    container: {
      padding: '0.5rem',
    },
  };
  return (
    <TabPanels>
      <TabPanel overflow="scroll">
        <Box style={styles.container}>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
          <Box style={styles.userBox}>users</Box>
        </Box>
      </TabPanel>
    </TabPanels>
  );
};
