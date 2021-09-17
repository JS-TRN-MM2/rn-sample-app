/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {
  createNativeStackNavigator,
  //NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { RootNavParamList, Routes } from '../../types';

import MainNavIos from './main-nav.ios';
import MyClosetStackNav from './stacks/my-closet-nav';
/*
const modalScreenOptions: NativeStackNavigationOptions = {
  //cardOverlayEnabled: true,
  cardStyle: { backgroundColor: 'transparent', opacity: 1 },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};
*/
const RootStack = createNativeStackNavigator<RootNavParamList>();

const RootNav = (): React.ReactElement => {
  const { Navigator, Screen } = RootStack;

  return (
    <Navigator
    /*
      screenOptions={({ route }) => {
        const modalOptions = route.params?.screen === 'MyClosetModal' ? modalScreenOptions : {};

        return {

          animationEnabled: true,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          cardStyle: { backgroundColor: 'transparent', opacity: 1 },
          ...modalOptions,
        };
        
      }}
      */
    >
      <Screen name={Routes.MainNavIos} component={MainNavIos} />
      <Screen name={Routes.MyClosetStackNav} component={MyClosetStackNav} />
    </Navigator>
  );
};

export default RootNav;
