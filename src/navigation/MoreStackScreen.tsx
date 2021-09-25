/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MoreStackParamList, Routes } from '../../types';
import MoreScreen from '../features/MoreScreen';

const MoreStack = createNativeStackNavigator<MoreStackParamList>();

const MoreStackScreen = (): React.ReactElement => {
  const { Navigator, Screen } = MoreStack;

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Screen name={Routes.MoreScreen} component={MoreScreen} />
    </Navigator>
  );
};

export default MoreStackScreen;
