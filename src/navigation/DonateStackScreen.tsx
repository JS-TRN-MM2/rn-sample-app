/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DonateStackParamList, Routes } from '../../types';
import DonateScreen from '../screens/DonateScreen';

const DonateStack = createNativeStackNavigator<DonateStackParamList>();

const DonateStackScreen = (): React.ReactElement => {
  return (
    <DonateStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d02860',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <DonateStack.Screen name={Routes.DonateScreen} component={DonateScreen} />
    </DonateStack.Navigator>
  );
};

export default DonateStackScreen;
