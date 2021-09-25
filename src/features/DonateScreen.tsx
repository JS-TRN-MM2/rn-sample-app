/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DonateScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Donation Closet Items goes here</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91cbbd',
  },
});

export default DonateScreen;
