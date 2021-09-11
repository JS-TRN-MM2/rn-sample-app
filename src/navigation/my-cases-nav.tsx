import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyCasesScreen, MyCasesModal } from '@screens';
import { MyCasesStackParamList, Routes } from '../../types';

const MyCasesStack = createNativeStackNavigator<MyCasesStackParamList>();

const MyCasesStackNav = (): React.ReactElement => {
  const { Navigator, Screen, Group } = MyCasesStack;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group>
        <Screen name={Routes.MyCasesScreen} component={MyCasesScreen} />
      </Group>
      <Group>
        <Screen name={Routes.MyCasesModal} component={MyCasesModal} />
      </Group>
    </Navigator>
  );
};

export default MyCasesStackNav;