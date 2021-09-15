/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import type { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { TimeLocStackParamList, Routes } from '../../types';
import TimeLocScreen from '../features/time-loc/time-loc-screen';
import TimeLocInfoScreen from '../features/time-loc/time-loc-info-screen';

const TimeLocStack = createNativeStackNavigator<TimeLocStackParamList>();

const TimeLocStackNav = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>): React.ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });
  }, [navigation]);
  const { Navigator, Screen } = TimeLocStack;
  return (
    <Navigator>
      <Screen name={Routes.TimeLocScreen} component={TimeLocScreen} />
      <Screen name={Routes.TimeLocInfoScreen} component={TimeLocInfoScreen} />
    </Navigator>
  );
};

export default TimeLocStackNav;
