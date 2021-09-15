/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { TabsNavStackParamList, Routes } from '../../types';

import { ShareClosetScreen } from '../features';
import { DonationsScreen } from '../features';
import TimeLocStackScreen from './time-loc-nav';
import MyClosetStackNav from './my-closet-nav';
//import MyClosetStackScreen from "./my-closet-nav";

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const TabsNavStack = createMaterialBottomTabNavigator<TabsNavStackParamList>();

const TabsNav = (): React.ReactElement => {
  const { Navigator, Screen } = TabsNavStack;

  return (
    <Navigator
      initialRouteName={Routes.DonationsScreen}
      barStyle={{ backgroundColor: 'black' }}
      shifting={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: IoniconName = 'time';

          if (route.name === Routes.TimeLocNav) {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === Routes.MyClosetNav) {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === Routes.ShareClosetScreen) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === Routes.DonationsScreen) {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Screen
        name={Routes.TimeLocNav}
        component={TimeLocStackScreen}
        options={{
          tabBarLabel: 'TimeLoc',
        }}
      />
      <Screen
        name={Routes.MyClosetNav}
        component={MyClosetStackNav}
        options={{ tabBarLabel: 'MyCloset' }}
      />
      <Screen
        name={Routes.ShareClosetScreen}
        component={ShareClosetScreen}
        options={{
          title: 'Share Closet',
          tabBarLabel: 'ShareCloset',
        }}
      />
      <Screen
        name={Routes.DonationsScreen}
        component={DonationsScreen}
        options={{ tabBarLabel: 'Donations' }}
      />
    </Navigator>
  );
};

export default TabsNav;
