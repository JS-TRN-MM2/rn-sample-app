/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { View, Text } from 'react-native';
import { Platform } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Share, AddItem, Donation } from '../features';

import MoreStackNav from './more-nav';
import MyClosetStackNav from './my-closet-nav';

import { TabsNavStackParamList, Routes } from '../../types';

const TabsNavStack = createMaterialBottomTabNavigator<TabsNavStackParamList>();

interface TabContainerProps {
  label?: string;
  focused?: boolean;
}

const TabContainer: React.FC<TabContainerProps> = ({ children, label, focused }) => (
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

const tabBarOptions = {
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

const TabsNav = () => {
  const { Navigator, Screen } = TabsNavStack;

  return (
    <Navigator
      initialRouteName="MyCloset"
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const BadgedIcon = withBadge(1)(Ionicons);
          let label, iconName: string;

          switch (route.name) {
            case 'MyClosetStackNav':
              iconName = `${Platform.OS === 'android' ? 'md-shirt' : 'ios-shirt-outline'}`;
              break;
            case 'Share':
              iconName = `${Platform.OS === 'android' ? 'heart-circle' : 'heart-circle-outline'}`;
              break;
            case 'AddItem':
              iconName = 'add';
              break;
            case 'Donation':
              iconName = `${Platform.OS === 'android' ? 'ios-gift-sharp' : 'ios-gift-outline'}`;
              break;
            case 'MoreStackNav':
              iconName = 'ellipsis-horizontal';
              break;
            default:
              return null;
          }
          return (
            <TabContainer label={label} focused={focused}>
              <BadgedIcon
                type="MaterialCommunityIcons"
                name={iconName}
                size={30}
                color={focused ? '#31AAB7' : '#ACBAC3'}
              />
            </TabContainer>
          );
        },
      })}
    >
      <Screen name={Routes.MyClosetStackNav} component={MyClosetStackNav} />
      <Screen name={Routes.Share} component={Share} />
      <Screen name={Routes.AddItem} component={AddItem} />

      <Screen name={Routes.Donation} component={Donation} />
      <Screen name={Routes.MoreStackNav} component={MoreStackNav} />
    </Navigator>
  );
};

export default TabsNav;
