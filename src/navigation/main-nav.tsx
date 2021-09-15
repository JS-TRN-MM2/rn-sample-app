import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainNavStackParamList, Routes } from '../../types';
import { SettingsScreen } from '../features';
import TabsNav from './tabs-nav';

import Header from '../core/header';

const DrawerNavStack = createDrawerNavigator<MainNavStackParamList>();

// Main Nav is a drawer nav
const MainNav = (): React.ReactElement => {
  const { Navigator, Screen } = DrawerNavStack;
  return (
    <Navigator initialRouteName={Routes.TabsNav}>
      <Screen
        name={Routes.TabsNav}
        component={TabsNav}
        options={{
          header: (props) => <Header name={'Sample App'} {...props} />,
        }}
      />
      <Screen name={Routes.SettingsScreen} component={SettingsScreen} />
    </Navigator>
  );
};

export default MainNav;
