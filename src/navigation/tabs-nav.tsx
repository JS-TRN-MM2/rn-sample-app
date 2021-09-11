/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { TabsNavStackParamList, Routes } from '../../types';

import { MyApptsScreen } from '../screens';
import { BsmScreen } from '../screens';
import MyDayStackScreen from './my-day-nav';
import MyCasesStackNav from './my-cases-nav';
//import MyCasesStackScreen from "./my-cases-nav";

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const TabsNavStack = createMaterialBottomTabNavigator<TabsNavStackParamList>();

const TabsNav = (): React.ReactElement => {
  const { Navigator, Screen } = TabsNavStack;

  return (
    <Navigator
      initialRouteName={Routes.BsmScreen}
      barStyle={{ backgroundColor: 'black' }}
      shifting={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: IoniconName = 'time';

          if (route.name === Routes.MyDayNav) {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === Routes.MyCasesNav) {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === Routes.MyApptsScreen) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === Routes.BsmScreen) {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Screen
        name={Routes.MyDayNav}
        component={MyDayStackScreen}
        options={{ tabBarLabel: 'MyDay' }}
      />
      <Screen
        name={Routes.MyCasesNav}
        component={MyCasesStackNav}
        options={{ tabBarLabel: 'MyCases' }}
      />
      <Screen
        name={Routes.MyApptsScreen}
        component={MyApptsScreen}
        options={{ tabBarLabel: 'MyAppts' }}
      />
      <Screen name={Routes.BsmScreen} component={BsmScreen} options={{ tabBarLabel: 'BSM' }} />
    </Navigator>
  );
};

export default TabsNav;
