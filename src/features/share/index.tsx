/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShareScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Share Closet Items goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShareScreen;
