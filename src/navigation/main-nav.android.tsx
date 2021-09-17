import * as React from 'react';
//import { View, Text } from 'react-native';
//import { Platform } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainNavAndroidStackParamList, Routes } from '../../types';

import MyClosetNav from '../navigation/stacks/my-closet-nav';
import ShareNav from '../navigation/stacks/share-nav';
import AddItemNav from '../navigation/stacks/add-item-nav';
import DonateNav from '../navigation/stacks/donate-nav';
import MoreNav from '../navigation/stacks/more-nav';

const DrawerNavStack = createDrawerNavigator<MainNavAndroidStackParamList>();

import { DrawerContent } from '../features/drawer-content';
/*
interface DrawerContainerProps {
  label?: string;
  focused?: boolean;
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({ children, label, focused }) => (
  <>
    {focused ? (
      <View>
        {children}
        <Text>{label}</Text>
      </View>
    ) : (
      <View>
        {children}
        <Text>{label}</Text>
      </View>
    )}
  </>
);
*/
/*
const drawerOptions = {
  labelStyle: {
    fontSize: 50,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    paddingTop: 50,
    backgroundColor: 'red',
  },
};
*/

const MainNavAndroid = (): React.ReactElement => {
  const { Navigator, Screen } = DrawerNavStack;
  return (
    <Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName={Routes.MyClosetNav}
    >
      <Screen name={Routes.MyClosetStackNav} component={MyClosetStackNav} />
      <Screen name={Routes.ShareNav} component={ShareNav} />
      <Screen name={Routes.AddItemNav} component={AddItemNav} />

      <Screen name={Routes.DonateNav} component={DonateNav} />
      <Screen name={Routes.MoreNav} component={MoreNav} />
    </Navigator>
  );
};

export default MainNavAndroid;
