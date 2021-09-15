import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { TabsNavStackParamList, Routes } from '../../../types';

type Props = {
  navigation: MaterialBottomTabNavigationProp<TabsNavStackParamList, Routes.DonationsScreen>;
};

const DonationsScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Donations Screen</Text>
    </View>
  );
};

export default DonationsScreen;
