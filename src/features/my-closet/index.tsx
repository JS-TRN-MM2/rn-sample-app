/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCloset = (props) => {
  return (
    <View style={styles.container}>
      <Text>My Closet Items goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MyCloset;
