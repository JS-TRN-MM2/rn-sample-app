import React from 'react';

import { FirstNavStackParamList, Routes } from '../../types';
import { SplashScreen } from '../screens';
import MainNav from './main-nav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screenOptions = {
  headerShown: false,
};

const FirstNavStack = createNativeStackNavigator<FirstNavStackParamList>();

// Main Nav is a drawer nav
const FirstNav = (): React.ReactElement => {
  const { Navigator, Screen } = FirstNavStack;
  return (
    <Navigator initialRouteName={Routes.SplashScreen} screenOptions={screenOptions}>
      <Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Screen name={Routes.MainNav} component={MainNav} />
    </Navigator>
  );
};

export default FirstNav;
