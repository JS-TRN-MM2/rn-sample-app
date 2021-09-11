import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { MyCasesStackParamList, Routes } from '../../types';
import { MyCasesScreen, MyCasesModal } from '@screens';

const ModalStack = createNativeStackNavigator<MyCasesStackParamList>();

const ModalStackScreen = (): React.ReactElement => {
  return (
    <ModalStack.Navigator screenOptions={{ presentation: 'modal' }}>
      <ModalStack.Screen name={Routes.MyCasesScreen} component={MyCasesScreen} />
      <ModalStack.Screen name={Routes.MyCasesModal} component={MyCasesModal} />
    </ModalStack.Navigator>
  );
};

export default ModalStackScreen;
