/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DonateScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Donation Closet Items goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DonateScreen;
