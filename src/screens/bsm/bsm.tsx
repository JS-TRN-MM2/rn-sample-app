import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { TabsNavStackParamList, Routes } from '../../../types';

type Props = {
  navigation: MaterialBottomTabNavigationProp<TabsNavStackParamList, Routes.BsmScreen>;
};

const BsmScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BSM Screen</Text>
    </View>
  );
};

export default BsmScreen;
