/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { AuthStackParamList, AppDrawerStackParamList, Routes } from '../../types';

import SplashScreen from '../features/auth/SplashScreen';
import SignInScreen from '../features/auth/SignInScreen';
import SignUpScreen from '../features/auth/SignUpScreen';
import ResetPasswordScreen from '../features/auth/ResetPasswordScreen';

import { DrawerContent } from './features/DrawerContent';
import MainTabScreen from './navigation/MainTabScreen';
import SettingsScreen from './features/SettingsScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackScreen = (): React.ReactElement => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <AuthStack.Screen name={Routes.SignInScreen} component={SignInScreen} />
      <AuthStack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
      <AuthStack.Screen name={Routes.ResetPasswordScreen} component={ResetPasswordScreen} />
    </AuthStack.Navigator>
  );
};

const AppDrawerStack = createDrawerNavigator<AppDrawerStackParamList>;
const AppDrawerStackScreen = (): React.ReactElement => {
  return (
    <AppDrawerStack.Navigator drawerContent={(props: any) => <DrawerContent {...props} />}>
      <AppDrawerStack.Screen name="HomeDrawer" component={MainTabScreen} />
      <AppDrawerStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </AppDrawerStack.Navigator>
  );
};
