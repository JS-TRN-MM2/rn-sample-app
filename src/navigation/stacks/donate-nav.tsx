/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DonateStackParamList, Routes } from '../../../types';
import DonateScreen from '../../features/donate';

const DonateStack = createNativeStackNavigator<DonateStackParamList>();

const DonateNav = (): React.ReactElement => {
  const { Navigator, Screen } = DonateStack;

  return (
    <Navigator
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
      <Screen name={Routes.DonateScreen} component={DonateScreen} />
    </Navigator>
  );
};

export default DonateNav;
