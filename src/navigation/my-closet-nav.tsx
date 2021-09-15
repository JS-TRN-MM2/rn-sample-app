import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyClosetScreen from '../features/my-closet/my-closet-screen';
import MyClosetModal from '../features/my-closet/my-closet-modal';
import { MyClosetStackParamList, Routes } from '../../types';

const MyClosetStack = createNativeStackNavigator<MyClosetStackParamList>();

const MyClosetStackNav = (): React.ReactElement => {
  const { Navigator, Screen, Group } = MyClosetStack;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group>
        <Screen name={Routes.MyClosetScreen} component={MyClosetScreen} />
      </Group>
      <Group>
        <Screen name={Routes.MyClosetModal} component={MyClosetModal} />
      </Group>
    </Navigator>
  );
};

export default MyClosetStackNav;
