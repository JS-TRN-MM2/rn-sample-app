/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ShareScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Share Closet Items goes here</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91cbbd',
  },
});

export default ShareScreen;
