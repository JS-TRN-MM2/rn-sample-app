/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { FirstNavStackParamList, Routes } from '../../types';
import { SplashScreen } from '../features';
import MainNavIos from './main-nav.ios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screenOptions = {
  headerShown: false,
};

const FirstNavStack = createNativeStackNavigator<FirstNavStackParamList>();

const FirstNav = (): React.ReactElement => {
  const { Navigator, Screen } = FirstNavStack;
  return (
    <Navigator initialRouteName={Routes.SplashScreen} screenOptions={screenOptions}>
      <Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Screen name={Routes.MainNavIos} component={MainNavIos} />
    </Navigator>
  );
};

export default FirstNav;
