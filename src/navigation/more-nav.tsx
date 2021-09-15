/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import type { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { MoreStackParamList, Routes } from '../../types';
import More from '../features/more';
import TimeLocScreen from '../features/more/time-loc-screen';
import TimeLocInfoScreen from '../features/more/time-loc-info-screen';

const TimeLocStack = createNativeStackNavigator<MoreStackParamList>();

const MoreStackNav = ({
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
      <Screen name={Routes.More} component={More} />
      <Screen name={Routes.TimeLocScreen} component={TimeLocScreen} />
      <Screen name={Routes.TimeLocInfoScreen} component={TimeLocInfoScreen} />
    </Navigator>
  );
};

export default MoreStackNav;
