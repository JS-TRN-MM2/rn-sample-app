/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ShareStackParamList, Routes } from '../../../types';
import ShareScreen from '../../features/share';

const ShareStack = createNativeStackNavigator<ShareStackParamList>();

const ShareNav = (): React.ReactElement => {
  const { Navigator, Screen } = ShareStack;

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#694fad',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Screen name={Routes.ShareScreen} component={ShareScreen} />
    </Navigator>
  );
};

export default ShareNav;
