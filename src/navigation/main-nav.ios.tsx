import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainNavIosStackParamList, Routes } from '../../types';
import { SettingsScreen } from '../features';
import TabsNav from './tabs-nav';

const DrawerNavStack = createDrawerNavigator<MainNavIosStackParamList>();

// Main Nav is a drawer nav
const MainNavIos = (): React.ReactElement => {
  const { Navigator, Screen } = DrawerNavStack;
  return (
    <Navigator initialRouteName={Routes.TabsNav}>
      <Screen name={Routes.TabsNav} component={TabsNav} />
      <Screen name={Routes.SettingsScreen} component={SettingsScreen} />
    </Navigator>
  );
};

export default MainNavIos;
