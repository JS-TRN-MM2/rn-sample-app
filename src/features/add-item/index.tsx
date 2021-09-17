/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddItem = (props) => {
  return (
    <View style={styles.container}>
      <Text>Add Item goes here</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#91cbbd',
  },
});

export default AddItem;
