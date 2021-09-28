/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useTheme } from 'react-native-paper';

import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

import MyClosetScreen from '../features/MyClosetScreen';
import { DrawerContent } from '../features/DrawerContent';
import MyClosetModal from '../features/my-closet/my-closet-modal';
import { MyClosetDrawerStackParamList, Routes } from '../../types';

const MyClosetDrawerStack = createDrawerNavigator<MyClosetDrawerStackParamList>();

const MyClosetDrawerStackScreen = ({ navigation }): React.ReactElement => {
  const { colors } = useTheme();
  const currentAuthUser = useSelector((state: RootState) => state.auth.currentAuthUser);

  return (
    <MyClosetDrawerStack.Navigator
      drawerContent={(props: any) => <DrawerContent {...props} />}
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
      <MyClosetDrawerStack.Screen
        name="My Closet"
        component={MyClosetScreen}
        options={{
          title: 'Welcome, ' + currentAuthUser.username,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colors.text,
        }}
      />
      <MyClosetDrawerStack.Screen name={Routes.MyClosetModal} component={MyClosetModal} />
    </MyClosetDrawerStack.Navigator>
  );
};

export default MyClosetDrawerStackScreen;
