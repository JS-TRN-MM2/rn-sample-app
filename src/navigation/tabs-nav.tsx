/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MyClosetNav from '../navigation/stacks/my-closet-nav';
import ShareNav from '../navigation/stacks/share-nav';
import AddItemNav from '../navigation/stacks/add-item-nav';
import DonateNav from '../navigation/stacks/donate-nav';
import MoreNav from '../navigation/stacks/more-nav';

import { TabsNavStackParamList, Routes } from '../../types';

const TabsNavStack = createMaterialBottomTabNavigator<TabsNavStackParamList>();

const TabsNav = () => {
  const { Navigator, Screen } = TabsNavStack;

  return (
    <Navigator activeColor="#fff" style={{ backgroundColor: 'tomato' }}>
      <Screen
        name="My Closet"
        component={MyClosetNav}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => <Ionicons name="ios-shirt-outline" color={color} size={26} />,
        }}
      />
      <Screen
        name={Routes.ShareNav}
        component={ShareNav}
        options={{
          tabBarLabel: 'Share',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name={Routes.AddItemNav}
        component={AddItemNav}
        options={{
          tabBarLabel: 'Add Item',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => <Ionicons name="add" color={color} size={26} />,
        }}
      />

      <Screen
        name={Routes.DonateNav}
        component={DonateNav}
        options={{
          tabBarLabel: 'Donate',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => <Ionicons name="ios-gift-outline" color={color} size={26} />,
        }}
      />
      <Screen
        name={Routes.MoreNav}
        component={MoreNav}
        options={{
          tabBarLabel: 'More',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabsNav;
