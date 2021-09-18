/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ShareStackParamList, Routes } from '../../types';
import ShareScreen from '../screens/ShareScreen';

const ShareStack = createNativeStackNavigator<ShareStackParamList>();

const ShareStackScreen = (): React.ReactElement => {
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

export default ShareStackScreen;
