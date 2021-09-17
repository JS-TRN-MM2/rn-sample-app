/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MoreStackParamList, Routes } from '../../../types';
import More from '../../features/more';

const MoreStack = createNativeStackNavigator<MoreStackParamList>();

const MoreNav = (): React.ReactElement => {
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
      <Screen name={Routes.More} component={More} />
    </Navigator>
  );
};

export default MoreNav;
