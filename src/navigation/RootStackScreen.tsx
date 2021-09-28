/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from '../../types';

import SplashScreen from '../features/auth/SplashScreen';
import SignInScreen from '../features/auth/SignInScreen';
import SignUpScreen from '../features/auth/SignUpScreen';
import ResetPasswordScreen from '../features/auth/ResetPasswordScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = (): React.ReactElement => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <RootStack.Screen name={Routes.SignInScreen} component={SignInScreen} />
      <RootStack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
      <RootStack.Screen name={Routes.ResetPasswordScreen} component={ResetPasswordScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
