/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

import { MoreStackParamList, Routes } from '../../../types';

type MoreProp = {
  navigation: NativeStackNavigationProp<MoreStackParamList, Routes.More>;
};

const More: React.FC<MoreProp> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>More Items goes here</Text>
      <Button
        onPress={() => {
          navigation.navigate(Routes.TimeLocScreen);
        }}
      >
        Time and Location API
      </Button>
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

export default More;
