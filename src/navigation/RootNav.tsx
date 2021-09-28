/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

import { fetchUser } from '../features/auth/txUsers';
import { setAuth } from '../features/auth/authSlice';

import { AuthStackParamList, AppDrawerStackParamList, Routes } from '../../types';

// auth stack screens
import SplashScreen from '../features/auth/SplashScreen';
import SignInScreen from '../features/auth/SignInScreen';
import SignUpScreen from '../features/auth/SignUpScreen';
import ResetPasswordScreen from '../features/auth/ResetPasswordScreen';

// app drawer stack screens
import { DrawerContent } from '../features/DrawerContent';
import MainTabScreen from '../navigation/MainTabScreen';
import SettingsScreen from '../features/SettingsScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackScreens = (): React.ReactElement => {
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

const AppDrawerStack = createDrawerNavigator<AppDrawerStackParamList>();
const AppDrawerStackScreens = (): React.ReactElement => {
  return (
    <AppDrawerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppDrawerStack.Screen name={Routes.MainTabScreen} component={MainTabScreen} />
      <AppDrawerStack.Screen name={Routes.SettingsScreen} component={SettingsScreen} />
    </AppDrawerStack.Navigator>
  );
};

const customDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
  },
};

const customDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
  },
};

export const RootNav = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.auth.currentTheme);
  //const token = useSelector((state:RootState) => state.auth.token);
  const currentAuthUser = useSelector((state: RootState) => state.auth.currentAuthUser);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
    fetchUser()
      .then((len) => {
        if (len > 0) {
          dispatch(setAuth());
        }
      })
      .catch((error) => {
        console.error('what is the error', error);
      });
  }, []);

  return (
    <PaperProvider theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <NavigationContainer theme={currentTheme ? customDarkTheme : customDefaultTheme}>
        {/*{token ? (*/}
        {console.log('what is isAuth', isAuth)}
        {console.log('what is currentUser', currentAuthUser)}
        {isAuth ? <AppDrawerStackScreens /> : <AuthStackScreens />}
      </NavigationContainer>
    </PaperProvider>
  );
};
