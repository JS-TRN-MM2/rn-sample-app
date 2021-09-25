import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyClosetScreen from '../features/MyClosetScreen';
import MyClosetModal from '../features/my-closet/my-closet-modal';
import { MyClosetStackParamList, Routes } from '../../types';

const MyClosetStack = createNativeStackNavigator<MyClosetStackParamList>();

const MyClosetStackScreen = (): React.ReactElement => {
  return (
    <MyClosetStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <MyClosetStack.Group>
        <MyClosetStack.Screen name={Routes.MyClosetScreen} component={MyClosetScreen} />
      </MyClosetStack.Group>
      <MyClosetStack.Group>
        <MyClosetStack.Screen name={Routes.MyClosetModal} component={MyClosetModal} />
      </MyClosetStack.Group>
    </MyClosetStack.Navigator>
  );
};

export default MyClosetStackScreen;
