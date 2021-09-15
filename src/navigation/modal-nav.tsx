import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { MyClosetStackParamList, Routes } from '../../types';
import MyClosetScreen from '../features/my-closet/my-closet-screen';
import MyClosetModal from '../features/my-closet/my-closet-modal';

const ModalStack = createNativeStackNavigator<MyClosetStackParamList>();

const ModalStackScreen = (): React.ReactElement => {
  return (
    <ModalStack.Navigator screenOptions={{ presentation: 'modal' }}>
      <ModalStack.Screen name={Routes.MyClosetScreen} component={MyClosetScreen} />
      <ModalStack.Screen name={Routes.MyClosetModal} component={MyClosetModal} />
    </ModalStack.Navigator>
  );
};

export default ModalStackScreen;
