/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabScene } from 'react-navigation';
import withBadge from '../components/withBadge';
import { MyCloset, Share, AddItem, Donation, More } from '../screens';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const stackConfig = {
  cardStyle: { backgroundColor: 'white' },
};

const MyClosetStack = createNativeStackNavigator({ MyCloset }, { ...stackConfig });

MyClosetStack.setOptions = {
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-cog`} type="ionicon" color={tintColor} />
  ),
  tabBarLabel: 'Settings',
};

const ShareClosetStack = createNativeStackNavigator({ Share }, { ...stackConfig });
ShareClosetStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-cog`} type="ionicon" color={tintColor} />
  ),
  tabBarLabel: 'Settings',
};

const AddItemStack = createNativeStackNavigator({ AddItem }, { ...stackConfig });
AddItemStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-cog`} type="ionicon" color={tintColor} />
  ),
  tabBarLabel: 'Settings',
};

const DonateStack = createNativeStackNavigator({ Donation }, { ...stackConfig });
DonateStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-cog`} type="ionicon" color={tintColor} />
  ),
  tabBarLabel: 'Settings',
};

const MoreStack = createNativeStackNavigator({ More }, { ...stackConfig });
MoreStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-cog`} type="ionicon" color={tintColor} />
  ),
  tabBarLabel: 'Settings',
};

const TabsNav = createBottomTabNavigator(
  { MyCloset, Share, AddItem, Donation, More },
  { initialRouteName: 'MyClosetStack' },
);

export default TabsNav;
