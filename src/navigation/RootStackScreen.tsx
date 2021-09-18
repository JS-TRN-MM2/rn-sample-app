/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from '../../types';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = ({ navigation }): React.ReactElement => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <RootStack.Screen name={Routes.SignInScreen} component={SignInScreen} />
      <RootStack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
