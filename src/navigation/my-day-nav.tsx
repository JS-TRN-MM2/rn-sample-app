import React from 'react';
import type { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { MyDayStackParamList, Routes } from '../../types';
import { MyDayScreen, MyDayInfoScreen } from '@screens';

const MyDayStack = createNativeStackNavigator<MyDayStackParamList>();

const MyDayStackNav = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>): React.ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });
  }, [navigation]);
  const { Navigator, Screen } = MyDayStack;
  return (
    <Navigator>
      <Screen name={Routes.MyDayScreen} component={MyDayScreen} />
      <Screen name={Routes.MyDayInfoScreen} component={MyDayInfoScreen} />
    </Navigator>
  );
};

export default MyDayStackNav;