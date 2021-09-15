import * as React from 'react';
//import { View, Text } from 'react-native';
//import { Platform } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainNavAndroidStackParamList, Routes } from '../../types';

import { Share, AddItem, Donation } from '../features';

import MoreStackNav from './more-nav';
import MyClosetStackNav from './my-closet-nav';

const DrawerNavStack = createDrawerNavigator<MainNavAndroidStackParamList>();
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
    <Navigator initialRouteName={Routes.MyClosetStackNav}>
      <Screen name={Routes.MyClosetStackNav} component={MyClosetStackNav} />
      <Screen name={Routes.Share} component={Share} />
      <Screen name={Routes.AddItem} component={AddItem} />

      <Screen name={Routes.Donation} component={Donation} />
      <Screen name={Routes.MoreStackNav} component={MoreStackNav} />
    </Navigator>
  );
};

export default MainNavAndroid;
